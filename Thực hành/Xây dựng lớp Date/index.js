function MyDate(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.setDay = function(newDay) {
        this.day = newDay;
    }
    this.setMonth = function(newMonth) {
        this.month = newMonth;
    }
    this.setYear = function(newYear) {
        this.year = newYear;
    }

    this.setDate = function(newDay, newMonth, newYear) {
        this.day = newDay;
        this.month = newMonth;
        this.year = newYear;
    }

    this.toString = function() {
        return this.day + "/" + this.month + "/" + this.year;
    }
}

let date = new MyDate(2, 2, 2002);
date.setDate(19, 5, 2025);
alert(date.toString());
