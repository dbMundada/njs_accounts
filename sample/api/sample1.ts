import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private http: HttpClient = new HttpClient();
  saveUserFeedback(payload) {
    return this.http.post('https://google.com', payload);
  }
}