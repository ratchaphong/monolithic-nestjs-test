import { format, parse, subHours } from 'date-fns';

export class DateUtility {
  static stringFormat(date: Date, formatString = 'yyyy-MM-dd'): string {
    try {
      return format(date, formatString);
    } catch (error) {
      return null;
    }
  }

  static setTime(date: Date, time: string): Date {
    return parse(time, 'HH:mm', date);
  }

  static subHours(date: Date, hours: number): Date {
    return subHours(date, hours);
  }
}
