import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

let API_ROOT;
if (environment.production) {
  API_ROOT = ""
}
else {
  API_ROOT = ""
  // API_ROOT = "http://127.0.0.1:5000"
}

const WORD_SUPRISE_THRESHOLD = 0.8

function parse_readability_result(data):any{
  let supriseWords = []
  let supriseWordCount = 0
  let unsupriseWordCount = 0
  let supriseWordHashMap = {}
  let totalScore = 0
  let totalWordCount = 0

  let sentences = data[0].map(sent=>{
    return sent.map(word=>{
      let score = Number(Number(word[1]).toFixed(3))
      score = score > 1 ? 1 : score
      let wordInfo = {
        text:word[0],
        score
      }

      if (!(wordInfo.text in supriseWordHashMap)) {
        if (score >= WORD_SUPRISE_THRESHOLD) {
          supriseWords.push(wordInfo)
          supriseWordCount++
        }
        else {
          unsupriseWordCount++
        }
        supriseWordHashMap[wordInfo.text] = true
      }



      totalScore += wordInfo.score
      totalWordCount++

      return wordInfo
    })
  })

  supriseWords.sort((o1,o2)=>{
    if (o1.score != o2.score) {
      return o2.score - o1.score
    }
    else {
      return o1.text < o2.text ? -1 : 1
    }

  })

  return {
    sentences,
    supriseWords,
    averageScore:Number((totalScore / totalWordCount).toFixed(3)),
    supriseWordCount: [supriseWordCount,unsupriseWordCount],
    surpriseWordRatio:Number((supriseWordCount / (supriseWordCount + unsupriseWordCount)).toFixed(2))
  }


}


@Injectable()
export class CheckerService {

  constructor(
    private http:Http
  ) {

  }

  get(path,query) {
    let search  = new URLSearchParams()
    for (let key in query) {
      search.set(key, query[key])
    }
    console.log(search);
    return this.http.get(`${API_ROOT}/${path}`,{
      search:search
    })
  }

  checkerDemo(url){
    let query  = new URLSearchParams()
    query.set("url",url)

    return this.http.get(`${API_ROOT}/checker/demo`,{
      search:query
    }).map(res=>{
      let data = res.json()
      if(data.success){
        data = parse_readability_result(data.data)
        console.log(data);
        return data
      }
      else {
        return {
          sentences:[]
        }
      }

    })
  }

  checker_1_1(url){
    return this.get("checker/checker-1-1",{
      url
    }).map(x=>x.json().data)
  }

  checker_1_2(url){
    return this.get("checker/checker-1-2",{
      url
    }).map(x=>x.json().data)
  }

  checker_1_3(url){
    return this.get("checker/checker-1-3",{
      url
    }).map(x=>x.json().data)
  }

  checker_1_4(url){
    return this.get("checker/checker-1-4",{
      url
    }).map(x=>x.json().data)
  }

  checker_2_1(url){
    return this.get("checker/checker-2-1",{
      url
    }).map(x=>x.json().data)
  }

  checker_2_2(url){
    return this.get("checker/checker-2-2",{
      url
    }).map(x=>x.json().data)
  }

  checker_2_3(url){
    return this.get("checker/checker-2-3",{
      url
    }).map(x=>x.json().data)
  }

  checker_2_4(url){
    return this.get("checker/checker-2-4",{
      url
    }).map(x=>x.json().data)
  }

  checker_4_1(url){
    return this.get("checker/checker-4-1",{
      url
    }).map(x=>x.json().data)
  }

  checker_text_image(url){
    return this.get("checker/checker-image-text",{
      url
    }).map(x=>x.json().data)
  }

  checker_all(url){
    return this.get("checker/all",{
      url
    }).map(x=>{
      let data = x.json().data
      data.readability = parse_readability_result(data.readability)
      console.log(data);
      return data
    })
  }

}
