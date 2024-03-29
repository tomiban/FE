import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Mascota } from "../interfaces/mascota"
import { Dueño } from "../interfaces/dueño";

@Injectable({
	providedIn: "root",
})
export class MascotaService {
	public myAppUrl: string = environment["endpoint"]
	public myAPIUrl: string = "api/mascotas/"

	constructor(private http: HttpClient) {}

	getMascotas(): Observable<Mascota[]> {
		return this.http.get<Array<Mascota>>(`${this.myAppUrl}${this.myAPIUrl}`)
	}

	getMascota(id: number): Observable<Mascota> {
		return this.http.get<Mascota>(`${this.myAppUrl}${this.myAPIUrl}${id}`)
	}

	addMascota(mascota: Mascota): Observable<Mascota> {
		return this.http.post<Mascota>(`${this.myAppUrl}${this.myAPIUrl}`, mascota)
  }

  addDueño(id:number, dueño: Dueño): Observable<Dueño> {
    return this.http.post<Dueño>(`${this.myAppUrl}${this.myAPIUrl}${id}/dueño`, dueño)
  }

	editMascota(id: number, mascota: Mascota): Observable<Mascota> {
		return this.http.put<Mascota>(`${this.myAppUrl}${this.myAPIUrl}${id}`, mascota)
	}

	deleteMascota(id: number): Observable<void> {
		return this.http.delete<void>(`${this.myAppUrl}${this.myAPIUrl}${id}`)
	}
}
