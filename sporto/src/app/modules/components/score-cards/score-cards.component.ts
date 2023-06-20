import { Component, OnInit } from '@angular/core';


import axios from './../../../../axios-config';
import {baseUrl} from '../../../_helpers/configuration'


@Component({
  selector: 'app-score-cards',
  templateUrl: './score-cards.component.html',
  styleUrls: ['./score-cards.component.scss'],
})
export class ScoreCardsComponent implements OnInit {
  // baseUrl :String = 

  constructor() {}

  ngOnInit(): void {}

  get() {
    //  useEffect(() => {
    //    fetchLiveData().then((res) => {
    //       console.log(res);
    //       if (res && res.data) {
    //         // setliveData(res.data);
    //       } else {
    //         console.log('error in fetching live scores');
    //       }
    //     });
    //  }, []);
    // }
  }



  fetchLiveData() {
    // let currentSport = localStorage.getItem("cs")
    //   ? localStorage.getItem("cs")
    //   : "cricket";
    let currentSport = "cricket";
  
    return axios.get(baseUrl + "live/" + currentSport);
  }
}
