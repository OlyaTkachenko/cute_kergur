import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class Signal{
    isOnline = signal(true);

    toggle(){
        this.isOnline.update(value => !value);
    }

}