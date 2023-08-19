export interface Tweet {
  id: string;
  date: string;
  period: Period;
  guest: Guest;
  text: string;
  helper: Helper[];
  transportation: string;
}

export interface Period {
  begin: string;
  end: string;
}

export interface Guest {
  id: string;
  name: string;
}

export interface Helper {
  id: string;
  name: string;
  mark: string;
}
