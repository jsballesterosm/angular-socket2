import { Component } from '@angular/core';
import { socket_io } from '../shared/utils/sockets/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-socket2';

  constructor() {
      socket_io.emit('chat message', 'prueba sebastian desde saturno');
  }

}
