const defaultGuests = [
  { id:1, email: 'gangnam-style@psy.com', tickets: 1751546680077 },
  { id:2, email: 'harlem.shake@baauer.com', tickets: 1751546695712 },
  { id:3, email: 'black.beatles@skrillex.com', tickets: 1751546704678 },
];
const emptyGuest = [{id:0, email: '', tickets: 0}]

const KEY = 'kpa-recruit-project.guests';
const KEY_EDIT = 'kpa-recruit-project.guests.edit';

export default class GuestRepository {
  load():Promise<GuestType[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        try {
          const json = localStorage.getItem(KEY);
          if (!json) throw 'no data found';
          resolve(JSON.parse(json));
        } catch (e) {
          resolve(defaultGuests);
        }
      }, 1000);
    });
  }
  save(guests:GuestType[]):Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        try {
          localStorage.setItem(KEY, JSON.stringify(guests));
        } catch (e) {
          // noop
        }
        resolve();
      }, 1000);
    });
  }
  loadPrev():Promise<GuestType[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        try {
          const json = localStorage.getItem(KEY_EDIT);
          if (!json) throw 'no data found';
          resolve(JSON.parse(json));
        } catch (e) {
          resolve(emptyGuest);
        }
      }, 1000);
    });
  }
  savePrev(guests:GuestType[]):Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        try {
          localStorage.setItem(KEY_EDIT, JSON.stringify(guests));
        } catch (e) {
          // noop
        }
        resolve();
      }, 1000);
    });
  }
  reset():Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.removeItem(KEY);
        localStorage.removeItem(KEY_EDIT);

        localStorage.setItem(KEY, JSON.stringify(defaultGuests))
        resolve();
      }, 1000);
    });
  }
}

export type GuestType = {
  id: number,
  email: string,
  tickets: number
}
