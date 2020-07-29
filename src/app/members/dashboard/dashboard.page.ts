import { Component, OnInit } from '@angular/core';
import { MembersRecordsService } from 'src/app/services/members-records.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private membersRecord: MembersRecordsService,) { }

  ngOnInit() {
  }
}
