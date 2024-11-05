{
  description = "Nodejs Dev Shell";

  inputs = {
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
    git-hooks = {
      inputs.nixpkgs.follows = "nixpkgs";
      url = "github:cachix/git-hooks.nix";
    };
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";

    nix-filter.url = "github:numtide/nix-filter";
  };

  outputs =
    {
      devshell,
      flake-utils,
      git-hooks,
      nixpkgs,
      nix-filter,
      self,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        app-source = nix-filter.lib.filter {
          root = ./.;
          exclude = [ ];

          include = [
            "src"
            (nix-filter.lib.matchExt "js")
            (nix-filter.lib.matchExt "json")
            (nix-filter.lib.matchExt "ts")
          ];
        };

        pkg-lock = builtins.fromJSON (builtins.readFile ./package.json);

        pkgs = import nixpkgs {
          overlays = [ devshell.overlays.default ];
          inherit system;
        };
      in
      {
        checks.git-hooks = git-hooks.lib.${system}.run {
          src = self;
          hooks = {
            actionlint.enable = true;

            deadnix = {
              enable = true;
              settings.edit = true;
            };

            nixfmt-rfc-style.enable = true;

            prettier = {
              enable = true;
              settings.write = true;
            };

            statix.enable = true;

            statix-write = {
              enable = true;
              name = "Statix Write";
              entry = "${pkgs.statix}/bin/statix fix";
              language = "system";
              pass_filenames = false;
            };

            trufflehog-verified = {
              enable = pkgs.stdenv.isLinux;
              name = "Trufflehog Search";
              entry = "${pkgs.trufflehog}/bin/trufflehog git file://. --since-commit HEAD --only-verified --fail --no-update";
              language = "system";
              pass_filenames = false;
            };
          };
        };

        devShells.default = pkgs.devshell.mkShell {
          devshell.startup.git-hooks.text = self.checks.${system}.git-hooks.shellHook;
          name = "dev-shell";
          packages = with pkgs; [
            deadnix
            nixfmt-rfc-style
            nodejs_20
            nodePackages.prettier
            nodePackages.typescript
            statix
          ];
        };

        formatter = pkgs.nixfmt-rfc-style;

        packages = {
          newwwie = pkgs.buildNpmPackage {
            inherit (pkg-lock) version;
            pname = "newwwie";
            src = app-source;
            npmDepsHash = "sha256-FGQpZmR5uSh3kLYyRPLG4KlQnnOzUxnJKeVkCVMabZM=";
          };
        };
      }
    );

}
