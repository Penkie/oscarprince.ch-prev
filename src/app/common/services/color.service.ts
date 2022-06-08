import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private currentColor$ = new BehaviorSubject<string>('');

  constructor() { }

  /**
   * Met à jour la couleur avec la nouvelle donnée
   * @param data nouvelle donnée
   */
  public setColor(data: string): void {
    this.currentColor$.next(data);
  }

  /**
   * Donne la couleur actuel en tant que behaviorSubject
   * @returns observable de la couleur
   */
  public getColor(): Observable<string> {
    return this.currentColor$.asObservable();
  }
}
