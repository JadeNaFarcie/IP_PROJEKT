import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Correct import
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private db: AngularFireDatabase) { }

  getQuestions(category: string): Observable<any[]> {
    return this.db.list(`/Pytania/${category}`).valueChanges();
  }

}
