const { test, expect } = require('@playwright/test');
const fs = require("fs");
const path = require("path");

test('fetched events file exists', () => {
    const filePath = path.join(__dirname, "..", "src", "js", "events", "events-data.js");
    const fileExists = fs.existsSync(filePath);
    expect(fileExists).toBe(true);
});

test('fetched events is not empty', () => {
    const filePath = path.join(__dirname, "..", "src", "js", "events", "events-data.js");
    const file = fs.statSync(filePath);
    expect(file.size).toBeGreaterThan(0);
});

test('that the dist folder is not empty', () => {
    const filePath = path.join(__dirname, "..", "dist");
    const buildDirectory = fs.readdirSync(filePath);

    expect(buildDirectory.length).toBeGreaterThan(0);
});