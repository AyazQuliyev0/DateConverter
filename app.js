const inputDate = prompt("Date");

if (/^\d{4}\.\d{2}\.\d{2}$/.test(inputDate)) {
    const [year, month, day] = inputDate.split('.').map(Number);
    let monthName;

    switch (month) {
        case 1:
            monthName = "yanvar";
            break;
        case 2:
            monthName = "fevral";
            break;
        case 3:
            monthName = "mart";
            break;
        case 4:
            monthName = "aprel";
            break;
        case 5:
            monthName = "may";
            break;
        case 6:
            monthName = "iyun";
            break;
        case 7:
            monthName = "iyul";
            break;
        case 8:
            monthName = "avqust";
            break;
        case 9:
            monthName = "sentyabr";
            break;
        case 10:
            monthName = "oktyabr";
            break;
        case 11:
            monthName = "noyabr";
            break;
        case 12:
            monthName = "dekabr";
            break;
        default:
            console.log("Düzgün ay daxil edin.");
            break;
    }

    if (monthName) {
        const outputDate = `${day} ${monthName} ${year}-cu il`;
        console.log(outputDate);
    }
} else {
    console.log("Tarixi 'YYYY.MM.DD' formatında daxil edin.");
}
