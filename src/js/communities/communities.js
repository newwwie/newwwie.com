import {h, render} from 'preact';
import { CommunityCard } from './CommunityCard';
import { CommunityData } from './community-data';

export const Communities = ()=>{
    return(
    CommunityData.map((val)=>{
        return <CommunityCard data={val}/>
    }))
}
render(<Communities/>, document.getElementById("groups"))
