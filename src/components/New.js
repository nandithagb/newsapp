import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class New extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "India bat first against SA in clash of top two",
            "description": "Follow live text, in-play video clips and radio commentary as India play South Africa in the Men's Cricket World Cup.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/67278614",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
            "publishedAt": "2023-11-05T09:07:21.5146316Z",
            "content": "India: Rohit Sharma (c), Shubman Gill, Virat Kohli, Shreyas Iyer, KL Rahul (wk), Suryakumar Yadav, Ravindra Jadeja, Mohammed Shami, Jasprit Bumrah, Kuldeep Yadav, Mohammed Siraj \r\nSouth Africa: Quint… [+276 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor(){
        super();
        console.log("hello im a constructor fom news component")
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    componentDidMount(){
        console.log("cdm")
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey-Top headline</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url}>
            <Newsitem title={element.title.slice(0,45)} description={element.description.slice(0,88)}
             imageurl={element.urlToImage}
             newsUrl={element.url}/>
            </div>
            })}

        
        
        </div>
    </div>
    )
  }
}

export default New