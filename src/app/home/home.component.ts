import { Component } from '@angular/core';
import { MagicService } from '../magic.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Booster } from '../booster.model';
import { Draft } from '../draft.model';
import { Player } from '../player.model';
import { Card } from '../card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'player-creation-overlay',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MagicService]
})
export class HomeComponent {
    playerNameList: string[] = [];
    playerList: Player[] = [];
    search;
    boosterList: Booster[] = [];
    cardHolder: Card;
    currentBoosters

  constructor(private magicService: MagicService, private router: Router) { }

  ngOnInit() {
  }

  addPlayer(name: string) {
    this.playerNameList.push(name);

    console.log(this.playerNameList);
  }

<<<<<<< HEAD
  getBoosters() {
      //   add class for animation here
=======
  generateBoosters() {
>>>>>>> 343455b10945594016603af93f684bc7ffcdba3b
      for(var i = 0; i < this.playerNameList.length * 3; i++) {
          // this.boosterCall();
          this.magicService.generateBooster().subscribe(data => {
            this.search = data;
            var freshPack: Booster = new Booster(this.search.cards, i.toString())
            this.boosterList.push(freshPack);
          });
        //   if (this.boosterList.count === this.playerNameList.length*3){
        //       //   then remove class for animation here
        //   }
        //   route to next page
      }
      console.log(this.boosterList);
      console.log(this.playerNameList);
  }

  generateDraft() {
    for(var i = 0; i < this.playerNameList.length; i++) {
      var newPlayer = new Player(this.playerNameList[i], i.toString());
      this.playerList.push(newPlayer);
    }
    var newDraft = new Draft(this.playerList, this.boosterList);
    this.magicService.saveDraft(newDraft);
  }

  beginAddCardToUser(cardId: string, playerId: string, draftId: string, packId: string) {
    this.magicService.getCard(packId, cardId, draftId).subscribe(data => {
      this.cardHolder = data;
      this.magicService.addCardToUser(this.cardHolder, playerId, cardId, packId, draftId);
    })
  }

  showme() {
    console.log(this.boosterList.length);
  }



}
