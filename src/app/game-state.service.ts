import { Injectable } from '@angular/core';
import { Bomb } from './models/bomb';

export const MOVE_STAND = 0;
export const MOVE_TOP = 1;
export const MOVE_RIGHT = 2;
export const MOVE_BOT = 3;
export const MOVE_LEFT = 4;
export const DROP_BOMB = 5;
export const BONUS_SPEED = 6;
export const BONUS_POWER = 7;
export const BONUS_BOMB_NUMBER = 8;
export const MOVE_STAND2 = 9;
export const MOVE_TOP2 = 10;
export const MOVE_RIGHT2 = 11;
export const MOVE_BOT2 = 12;
export const MOVE_LEFT2 = 13;
export const DROP_BOMB2 = 14;

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  charX = 1;
  charY = 1;
  move: number;
  bomb = 0;
  bombList: Bomb[] = [];

  player1 = {
    charX: 1,
    charY: 1,
    move: 0,
    bomb: 0,
    bombList: [],
  };


  player2 = {
    charX: 21,
    charY: 1,
    move: 0,
    bomb: 0,
    bombList: [],
  };




  /* player = [
    { id: 'perso1', src: '' },
    { id: 'perso2', src: '' },
    { id: 'perso3', src: '' },
    { id: 'perso4', src: '' }
  ];

  bombNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  bombPower = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  moveSpeed = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

  constructor() {
  }


}
