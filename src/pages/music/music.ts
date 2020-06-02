import { Component,ViewChild } from '@angular/core';

import { IonicPage, Content,Range} from 'ionic-angular';
import {Howl} from 'howler';


export class Track {
  data:string;
  text:string;
  path:string;
  
}


@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})

export class MusicPage {
  progress=0;
  x=0;
  headimg:string;
  
  @ViewChild('range') range:Range;
  
  @ViewChild('content') content:Content; 
  playlist: Track[ ]=[
    {
       
       data:'../../assets/imgs/f1.png',
       text:'Med-1',
       path:'../../assets/a1.ogg'
    },
    {
       data:'../../assets/imgs/f2.png',
       text:'Med-2',
       path:'../../assets/a2.ogg'

    },
    {
     
      data:'../../assets/imgs/f3.png',
      text:'Med-3',
      path:'../../assets/a3.ogg'
   },
   {
    
    data:'../../assets/imgs/f1.png',
    text:'Med-4',
    path:'../../assets/a4.ogg'
 },
 {
  
  data:'../../assets/imgs/f5.png',
  text:'Med-5',
  path:'../../assets/a5.ogg'
},
{
  
  data:'../../assets/imgs/f5.png',
  text:'Med-6',
  path:'../../assets/a5.ogg'
},
  ];

  activeTrack:Track=null;
  player:Howl=null;
  isPlaying=false
  constructor() { 
  
    
  }
  ionViewDidLoad() {
    this.headimg='../../assets/imgs/Mehul Jangir.jpg';
  }
 
  
 start(track:Track){
    if(this.player){
      this.player.stop();
    }
   
    this.player= new Howl({
      src:[track.path],
      html5:true,
      onplay:()=> {
     
        this.isPlaying = true;
        this.activeTrack = track;
      
        this.updateProgress();
        this.content.scrollToBottom();

      },
      onend:()=> {
      
      }


    }); 
  
    this.player.play();



  }
 togglePlayer(pause){

    this.isPlaying = !pause;
    if(pause){
      this.player.pause();
    }else{
      this.player.play();
    }

  }
   prev(){
    let index=this.playlist.indexOf(this.activeTrack);
    if(index>0)
    { 
      this.start(this.playlist[index-1]);


    }
    else {
      this.start(this.playlist[this.playlist.length -1]);
    }

  }
    next(){
    let index=this.playlist.indexOf(this.activeTrack);
    if(index != (this.playlist.length-1))
    { 
      this.start(this.playlist[index+1]);


    }
    else {
      this.start(this.playlist[0]);
    }

  }
  
 seek(){
     let newVal= +this.range.value;
      let duration=this.player.duration();


      this.player.seek(duration * (newVal/100));
    } 
 updateProgress(){
      
      let seek =this.player.seek();
     
      this.progress=(seek / this.player.duration()) *100 || 0;
      setTimeout(()=>
      {
        this.updateProgress();
      },1000)
    } 
  
    ionViewWillLeave() {
      
      if(this.player){
   
        this.player.pause();
      }
     

  }
 
  
    
}
