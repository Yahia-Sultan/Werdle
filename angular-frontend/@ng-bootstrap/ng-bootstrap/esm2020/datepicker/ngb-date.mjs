import { isInteger } from '../util/util';
/**
 * A simple class that represents a date that datepicker also uses internally.
 *
 * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
 * like `.equals()`, `.before()`, etc.
 *
 * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
 *
 * In many cases it is simpler to manipulate these objects together with
 * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
 *
 * @since 3.0.0
 */
export class NgbDate {
    constructor(year, month, day) {
        this.year = isInteger(year) ? year : null;
        this.month = isInteger(month) ? month : null;
        this.day = isInteger(day) ? day : null;
    }
    /**
     * A **static method** that creates a new date object from the `NgbDateStruct`,
     *
     * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
     *
     * If the `date` is already of `NgbDate` type, the method will return the same object.
     */
    static from(date) {
        if (date instanceof NgbDate) {
            return date;
        }
        return date ? new NgbDate(date.year, date.month, date.day) : null;
    }
    /**
     * Checks if the current date is equal to another date.
     */
    equals(other) {
        return other != null && this.year === other.year && this.month === other.month && this.day === other.day;
    }
    /**
     * Checks if the current date is before another date.
     */
    before(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            }
            else {
                return this.month < other.month;
            }
        }
        else {
            return this.year < other.year;
        }
    }
    /**
     * Checks if the current date is after another date.
     */
    after(other) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            }
            else {
                return this.month > other.month;
            }
        }
        else {
            return this.year > other.year;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci9uZ2ItZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXZDOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsTUFBTSxPQUFPLE9BQU87SUE4QmxCLFlBQVksSUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFXO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFNLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBTSxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU0sSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFsQkQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUEyQjtRQUNyQyxJQUFJLElBQUksWUFBWSxPQUFPLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEUsQ0FBQztJQVFEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLEtBQTRCO1FBQ2pDLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMzRyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsS0FBNEI7UUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ2pDO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLEtBQTRCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNqQztTQUNGO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdiRGF0ZVN0cnVjdH0gZnJvbSAnLi9uZ2ItZGF0ZS1zdHJ1Y3QnO1xyXG5pbXBvcnQge2lzSW50ZWdlcn0gZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcbi8qKlxyXG4gKiBBIHNpbXBsZSBjbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBkYXRlIHRoYXQgZGF0ZXBpY2tlciBhbHNvIHVzZXMgaW50ZXJuYWxseS5cclxuICpcclxuICogSXQgaXMgdGhlIGltcGxlbWVudGF0aW9uIG9mIHRoZSBgTmdiRGF0ZVN0cnVjdGAgaW50ZXJmYWNlIHRoYXQgYWRkcyBzb21lIGNvbnZlbmllbmNlIG1ldGhvZHMsXHJcbiAqIGxpa2UgYC5lcXVhbHMoKWAsIGAuYmVmb3JlKClgLCBldGMuXHJcbiAqXHJcbiAqIEFsbCBkYXRlcGlja2VyIEFQSXMgY29uc3VtZSBgTmdiRGF0ZVN0cnVjdGAsIGJ1dCByZXR1cm4gYE5nYkRhdGVgLlxyXG4gKlxyXG4gKiBJbiBtYW55IGNhc2VzIGl0IGlzIHNpbXBsZXIgdG8gbWFuaXB1bGF0ZSB0aGVzZSBvYmplY3RzIHRvZ2V0aGVyIHdpdGhcclxuICogW2BOZ2JDYWxlbmRhcmBdKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2FwaSNOZ2JDYWxlbmRhcikgdGhhbiBuYXRpdmUgSlMgRGF0ZXMuXHJcbiAqXHJcbiAqIFNlZSB0aGUgW2RhdGUgZm9ybWF0IG92ZXJ2aWV3XSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9vdmVydmlldyNkYXRlLW1vZGVsKSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAc2luY2UgMy4wLjBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlIGltcGxlbWVudHMgTmdiRGF0ZVN0cnVjdCB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHllYXIsIGZvciBleGFtcGxlIDIwMTZcclxuICAgKi9cclxuICB5ZWFyOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBtb250aCwgZm9yIGV4YW1wbGUgMT1KYW4gLi4uIDEyPURlYyBhcyBpbiBJU08gODYwMVxyXG4gICAqL1xyXG4gIG1vbnRoOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXkgb2YgbW9udGgsIHN0YXJ0aW5nIHdpdGggMVxyXG4gICAqL1xyXG4gIGRheTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBBICoqc3RhdGljIG1ldGhvZCoqIHRoYXQgY3JlYXRlcyBhIG5ldyBkYXRlIG9iamVjdCBmcm9tIHRoZSBgTmdiRGF0ZVN0cnVjdGAsXHJcbiAgICpcclxuICAgKiBleC4gYE5nYkRhdGUuZnJvbSh7eWVhcjogMjAwMCwgbW9udGg6IDUsIGRheTogMX0pYC5cclxuICAgKlxyXG4gICAqIElmIHRoZSBgZGF0ZWAgaXMgYWxyZWFkeSBvZiBgTmdiRGF0ZWAgdHlwZSwgdGhlIG1ldGhvZCB3aWxsIHJldHVybiB0aGUgc2FtZSBvYmplY3QuXHJcbiAgICovXHJcbiAgc3RhdGljIGZyb20oZGF0ZT86IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogTmdiRGF0ZSB8IG51bGwge1xyXG4gICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBOZ2JEYXRlKSB7XHJcbiAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGUgPyBuZXcgTmdiRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcih5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnllYXIgPSBpc0ludGVnZXIoeWVhcikgPyB5ZWFyIDogPGFueT5udWxsO1xyXG4gICAgdGhpcy5tb250aCA9IGlzSW50ZWdlcihtb250aCkgPyBtb250aCA6IDxhbnk+bnVsbDtcclxuICAgIHRoaXMuZGF5ID0gaXNJbnRlZ2VyKGRheSkgPyBkYXkgOiA8YW55Pm51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgZGF0ZSBpcyBlcXVhbCB0byBhbm90aGVyIGRhdGUuXHJcbiAgICovXHJcbiAgZXF1YWxzKG90aGVyPzogTmdiRGF0ZVN0cnVjdCB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBvdGhlciAhPSBudWxsICYmIHRoaXMueWVhciA9PT0gb3RoZXIueWVhciAmJiB0aGlzLm1vbnRoID09PSBvdGhlci5tb250aCAmJiB0aGlzLmRheSA9PT0gb3RoZXIuZGF5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IGRhdGUgaXMgYmVmb3JlIGFub3RoZXIgZGF0ZS5cclxuICAgKi9cclxuICBiZWZvcmUob3RoZXI/OiBOZ2JEYXRlU3RydWN0IHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFvdGhlcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueWVhciA9PT0gb3RoZXIueWVhcikge1xyXG4gICAgICBpZiAodGhpcy5tb250aCA9PT0gb3RoZXIubW9udGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXkgPT09IG90aGVyLmRheSA/IGZhbHNlIDogdGhpcy5kYXkgPCBvdGhlci5kYXk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGggPCBvdGhlci5tb250aDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMueWVhciA8IG90aGVyLnllYXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgZGF0ZSBpcyBhZnRlciBhbm90aGVyIGRhdGUuXHJcbiAgICovXHJcbiAgYWZ0ZXIob3RoZXI/OiBOZ2JEYXRlU3RydWN0IHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFvdGhlcikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy55ZWFyID09PSBvdGhlci55ZWFyKSB7XHJcbiAgICAgIGlmICh0aGlzLm1vbnRoID09PSBvdGhlci5tb250aCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRheSA9PT0gb3RoZXIuZGF5ID8gZmFsc2UgOiB0aGlzLmRheSA+IG90aGVyLmRheTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb250aCA+IG90aGVyLm1vbnRoO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy55ZWFyID4gb3RoZXIueWVhcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19