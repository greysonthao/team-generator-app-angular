import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numOfTeams: number | '' = '';
  teams: string[][] = [];

  addMember = () => {
    if (!this.newMemberName) {
      this.errorMessage = 'Error: Name cannot be empty';
      return console.log(this.errorMessage);
    }

    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  };

  onInput = (inputValue: string) => {
    this.newMemberName = inputValue;
  };

  onNumTeamsInput = (inputValue: string) => {
    this.numOfTeams = Number(inputValue);

    if (!this.numOfTeams) {
      this.numOfTeams = '';
    }

    console.log('numOfTeams: ', this.numOfTeams);
  };

  generateTeams = () => {
    if (this.numOfTeams <= 0 || !this.numOfTeams) {
      this.errorMessage = 'Error: Number of teams cannot be <= 0';
      return;
    }
    if (this.numOfTeams > this.members.length) {
      this.errorMessage =
        'Error: Number of teams cannot be more than than number of members';
      return;
    }
    this.errorMessage = '';

    const allMembers = [...this.members];

    while (allMembers.length > 0) {
      for (let i = 0; i < this.numOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
        console.log(this.teams);
      }
    }

    this.numOfTeams = '';
    this.members = [];
  };
}
