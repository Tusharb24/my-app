import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {
  serverStatus = "UP";
  isAllowesNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = '';
  serverCreated = false;
  servers  = ['Test'];
  

  constructor() { 
    setTimeout(() => {
      this.isAllowesNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit(): void {
  }

  onServerCreated(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "New server was Added with id: " + this.serverName;
  }

  onUpdateServerName(event : any)
  {
    this.serverName = event.target.value;
  }

  getColor()
  {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
