import { Injectable } from '@angular/core';
import { Observable, pipe, of, fromEvent, throwError } from "rxjs";
import { map, pluck, buffer, bufferCount, tap, scan } from "rxjs/operators";

import { passOnlyNumbers } from "../custom-operators/custom-operators";


@Injectable({
  providedIn: 'root'
})
export class LottoService {

	ticketCheckAgent():Observable<any> {
		let winningTicket = "ALA"

		let keypress$ = fromEvent(document, "keypress")

		return keypress$.pipe(
			pluck("key"),
			tap( key => console.log(`${key}`) ),
			bufferCount(3),
			map( (ticketChars:string[]) => {
				var ticket = ticketChars.join("")
				console.log(`ticket: ${ticket}`)
				return ticket
			}),
			map( (ticket:string) => {
				var winner = false;
				if(ticket.toUpperCase() == winningTicket) {
					winner = true;					
				}
				return {
					winner:winner,
					ticket:ticket
				}
			})
		)
	}


	/*
	.pipe(
      scan( (prev:number, current:number) => {
        if (current == 4) {
          console.log(`current val: ${current} / accumulated value: ${acc}`);
          console.log(`Result = ${current} + ${acc}`);
          return Number(acc) + Number(current);
        }
        else if (acc == 4) {
          return Number(acc)
        }
        else {
          return current;
        }
      })
    )
    */

	fours_exercise():Observable<any> {

		let keypress$ = fromEvent(document, "keypress")

		return keypress$.pipe(
			pluck("key"),
			passOnlyNumbers(),
			bufferCount(4),
			map( (keys:number[]) => {
				let sum = 0;
				for ( let n of keys ) {
					let num = Number(n);
					sum = sum + num;
				}
				return sum;
			}),
			map( sum => {
				if ( Number(sum) % 2 == 1 ) {
					throw new Error("ERROR! sum is odd!")
				}
				else {
					return sum
				}
			})
		)

	}

}
