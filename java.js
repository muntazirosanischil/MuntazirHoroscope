var today = new Date();

console.log(today);
var todayDay = today.getDate();
var todayMonth = today.getMonth() + 1;
console.log(todayDay);
console.log(todayMonth);

function findHoroscope() {
    var a = document.getElementById("Month").value;
    a = parseInt(a);
    var b = document.getElementById("Date").value;
    b = parseInt(b);
    var c = document.getElementById("Year").value;
    c = parseInt(c);

    if(todayDay === b && todayMonth === a){
        document.getElementById("horoscope").innerHTML = determineHoroscope(a,b);
        document.getElementById("message2").innerHTML = specialMessage();
        document.getElementById("image").innerHTML = horoscopeImage();
        document.getElementById("zodiac").innerHTML = getZodiac(c);
    }else{
        document.getElementById("horoscope").innerHTML = determineHoroscope(a,b);
        document.getElementById("message").innerHTML = horoscopeMessage();
        document.getElementById("image").innerHTML = horoscopeImage();
        document.getElementById("zodiac").innerHTML = getZodiac(c);
    }
}

function determineHoroscope(a,b) {
    var user = document.getElementById("name").value;
    sign = 0;
    if(a === 1 ){
        if(b < 21){
            sign = 1;
            return user + ", you are a Capricorn";
        }
        sign = 2;
        return user + ", you are an Aquarius";
    }
    if(a === 2){
        if(b < 20){
            sign = 2;
            return user + ", you are an Aquarius";
        }else if(b < 30){
            sign = 3;
            return user + ", you are a Pisces";
        }

    }
    if(a === 3){
        if(b < 21){
            sign = 3;
            return user + ", you are a Pisces";
        }
        sign = 4;
        return user + ", you are an Aries";

    }
    if(a === 4){
        if(b < 21){
            sign = 4;
            return user + ", you are an Aries";
        }else if(b < 31){
            sign = 5;
            return user + ", you are a Taurus";
        }
    }
    if(a === 5){
        if(b < 22){
            sign = 5;
            return user + ", you are a Taurus!";
        }
        sign = 6;
        return user + ", you are an Gemini";
    }
    if(a === 6){
        if(b < 22){
            sign = 6;
            return user + ", you are an Gemini";
        }else if(b < 31){
            sign = 7;
            return user + ", you are a Cancer";
        }
    }
    if(a === 7){
        if(b < 23){
            sign = 7;
            return user + ", you are a Cancer";
        }
        sign = 8;
        return user + ", you are an Leo";
    }
    if(a === 8){
        if(b < 23){
            sign = 8;
            return user + ", you are a Leo";
        }
        sign = 9;
        return user + ", you are an Virgo";
    }
    if(a === 9){
        if(b < 24){
            sign = 9;
            return user + ", you are an Virgo";
        }else if(b < 31){
            sign = 10;
            return user + ", you are a Libra";
        }
    }
    if(a === 10){
        if(b < 24){
            sign = 10;
            return user + ", you are a Libra";
        }
        sign = 11;
        return user + ", you are a Scorpio";
    }
    if(a === 11){
        if(b < 23){
            sign = 11;
            return user + ", you are a Scorpio";
        }else if(b < 31){
            sign = 12;
            return user + ", you are a Sagittarius";
        }
    }
    if(a === 12){
        if(b < 22){
            sign = 12;
            return user + ", you are a Sagittarius";
        }else if(b < 31){
            sign = 1;
            return user + ", you are a Capricorn";
        }
    }
    if(sign === 0){
        return user + "Please enter a valid date";
    }
}
function horoscopeImage(){
    if(sign === 1){
        return "<img src='Images/horoscope/capricorn.png'/>";
    }
    if(sign === 2){
        return "<img src='Images/horoscope/aquarius.png'/>";
    }
    if(sign === 3){
        return "<img src='Images/horoscope/pisces.png'/>";
    }
    if(sign === 4){
        return "<img src='Images/horoscope/aries.jpg'/>";
    }
    if(sign === 5){
        return "<img src='Images/horoscope/taurus.png'/>";
    }
    if(sign === 6){
        return "<img src='Images/horoscope/gemini.png'/>";
    }
    if(sign === 7){
        return "<img src='Images/horoscope/cancer.png'/>";
    }
    if(sign === 8){
        return "<img src='Images/horoscope/leo.jpg'/>";
    }
    if(sign === 9){
        return "<img src='Images/horoscope/virgo.png'/>";
    }
    if(sign === 10){
        return "<img src='Images/horoscope/libra.png'/>";
    }
    if(sign === 11){
        return "<img src='Images/horoscope/scorpio.png'/>";
    }
    if(sign === 12){
        return "<img src='Images/horoscope/sagitarrius.png'/>";
    }
}
function horoscopeMessage(){
    if(sign === 1){
        return "Ahh, Capricorn. The worst of the bunch. Your future is blocked by a catastrophic hunch. " +
            " Trek along the path that few travel, and your destination, wherever you are going, will be full of gravel. ";

    }
    if(sign === 2){
        return "Your horoscope is related to water. Be careful, because you may get dranked in the near future. ";

    }
    if(sign === 3){
        return "You are two fish. I will eat you for dinner. However, if you are a good child, you can safely swim away. " +
            " Get your homework done, do not procrastinate. If these commands are not fulfilled, " +
            " you will face eternal suffering. Your choice. ";
    }
    if(sign === 4){
        return "Whatever you do in the future, you will be the greatest at it. Be happy, cause no other horoscope has this power. ";
    }
    if(sign === 5){
        return "You are quite a curious person. Information that comes your way today could launch you into a search for truth, Taurus. " +
            "Searching too much may lead to a horrible fate, so be careful. ";

    }
    if(sign === 6){
        return "Your ability to dazzle people in positions of power is high right now. But you’re not going to do it with flattery or empty promises. " +
            "Hell no, you can back up your reputation with a solid work ethic. Anyone who thinks that you’ve become successful due to luck is kidding themselves. ";
    }
    if(sign === 7){
        return "You are the Terms and Conditions for Amazon. " +
            "Those items for shipment to countries outside of the U.S. may be subject to taxes, customs duties and fees levied by the destination country " +
            "(‘Import Fees’). The recipient of the shipment is the importer of record in the destination country and is responsible for all Import Fees." +
            "With respect to each item for which Import Fees have been calculated, you authorize Amazon Export or Merchant (as applicable) to designate a carrier " +
            "(‘Designated Carrier’) to act as your agent with the relevant customs and tax authorities in the destination country, to clear your merchandise, " +
            "process and remit your actual Import Fees for such item. ‘Import Fees Deposit’ represents an estimate of the Import Fees that will be levied on " +
            "the items in your order for shipment to countries outside of the U.S. By placing your order, you agree to allow Amazon Export and/or Merchant " +
            "(as applicable) to collect the Import Fees Deposit for the applicable items in your order. This deposit will be used, on your behalf, to reimburse " +
            "the Designated Carriers for the import fees that they have paid on your behalf to the appropriate authorities of the destination country." +
            "You further agree that the Designated Carriers may disclose to Amazon Export or Merchant (as applicable) the amount of actual Import Fees " +
            "levied on the item you have purchased from Amazon Export and/or Merchant (‘Actual Import Fees’). In the event that the Import Fees Deposit " +
            "exceeds the Actual Import Fees, Amazon Export or Merchant (as applicable) will refund the difference to you. In the case of gifts or other " +
            "purchases made on behalf of another recipient, you also agree to grant the foregoing authorizations on behalf of the recipient designated in your order. " +
            "To obtain details regarding the Actual Import Fees, or to obtain documentation or receipts in connection with customs clearance, you may contact the " +
            "Designated Carrier specified in your shipment confirmation. These terms and conditions are in addition to the standard Conditions of Use of the " +
            "Amazon website. Pursuant to those terms, title and risk of loss for the items transfer to the recipient upon delivery to the common carrier in the United States." +
            "Please note that Merchants participating in the International Direct program may have policies that differ from Amazon Export's terms and conditions." +
            "For items you have purchased from a Merchant, please see the applicable Merchant's policies for any other terms and conditions that may apply to your " +
            "purchase of such items. Limitations: For products shipped internationally, please note that any manufacturer warranty may not be valid; manufacturer " +
            "service options may not be available; product manuals, instructions and safety warnings may not be in destination country languages; the products " +
            "(and accompanying materials) may not be designed in accordance with destination country standards, specifications, and labeling requirements; " +
            "and the products may not conform to destination country voltage and other electrical standards (requiring use of an adapter or converter if appropriate). " +
            "You are responsible for assuring that the product can be lawfully imported to the destination country. When ordering from Amazon.com, the recipient is the " +
            "importer of record and must comply with all laws and regulations of the destination country. Privacy: Your privacy is important to us, and we know that you " +
            "care about how information about your order is used and shared. We would like our international customers and customers shipping products " +
            "internationally to be aware that cross-border shipments are subject to opening and inspection by customs and/or postal authorities. Also, we may " +
            "provide certain order, shipment, and product information, such as titles, to our international carriers, and such information may be communicated by " +
            "the carriers to customs and/or postal authorities in order to facilitate customs clearance and comply with local laws. If the order is a gift, " +
            "the package is marked ‘Gift,’ but the cost of the item is still stated on the customs form. Customs authorities require the value of the gift " +
            "item to be stated directly on the package. ";


    }
    if(sign === 8){
        return " You will never win an Oscar, no matter how hard you try. However, you are an attractive individual. " +
            "Your beauty will steal the heart of many, and once you settle down with a gorgeous partner, " +
            "all those hearts will be crushed and will come back to haunt you. Oof. ";

    }
    if(sign === 9){
        return "Your daily routine is to “get this bread”. There will be fortune and satisfaction later in your lifetime. ";

    }
    if(sign === 10){
        return "Old traumas and phobias could be released, although you should take care to not dwell on them too much or " +
            "you'll reinforce them instead of get rid of them. ";

    }
    if(sign === 11){
        return " You are bad at romance. You will find a lover, marry them, divorce them after sixty-seven days, " +
            "then your choice to divorce them will sting you back, and you will die of hypothermia, due to your cold-hearted actions. ";


    }
    if(sign === 12){
        return " You are #1. Your destiny is to be lit and swag in your elderly years. ";


    }
}

function getZodiac(c){
    var zodiac = "";
    if(c === 2001 || c === 2013 || c === 1989 || c === 1977 || c === 1965){
        var zodiac = "You are a Snake, sssss" + "<img src='Images/zodiac/snake.jpeg'/>";
    }
    if(c == 2018 || c == 2006 || c == 1994 || c == 1982 || c== 1970){
        var zodiac = "You are a Dog, roof!" + "<img src='Images/zodiac/dog.jpeg'/>";
    }
    if(c == 2017 || c == 2005 || c == 1993 || c == 1981 || c== 1969){
        var zodiac = "You are a Rooster, gobble gobble" + "<img src='Images/zodiac/rooster.jpeg'/>";
    }
    if(c == 2016 || c == 2004 || c == 1992 || c == 1980 || c== 1968){
        var zodiac = "You are a Monkey, ooo aaa" + "<img src='Images/zodiac/monkey.jpeg'/>";
    }
    if(c == 2015 || c == 2003 || c == 1991 || c == 1979 || c== 1967){
        var zodiac = "You are a Ram" + "<img src='Images/zodiac/ram.jpeg'/>";
    }
    if(c == 2014 || c == 2002 || c == 1990 || c == 1978 || c=== 1966){
        var zodiac = "You are a Horse, neighhh" + "<img src='Images/zodiac/horse.jpeg'/>";
    }
    if(c == 2012 || c == 2000 || c == 1988 || c == 1976 || c=== 1964){
        var zodiac = "You are a Dragon, hiss" + "<img src='Images/zodiac/dragon.jpeg'/>";
    }
    if(c == 2011 || c == 1999 || c == 1987 || c == 1975 || c=== 1963){
        var zodiac = "You are a Hare" + "<img src='Images/zodiac/hare.jpeg'/>";
    }
    if(c == 2010 || c == 1998 || c == 1986 || c == 1974 || c=== 1962){
        var zodiac = "You are a Tiger, grrr" + "<img src='Images/zodiac/tiger.jpeg'/>";
    }
    if(c == 2009 || c == 1997 || c == 1985 || c == 1973 || c=== 1961){
        var zodiac = "You are an Ox" + "<img src='Images/zodiac/ox.jpeg'/>";
    }
    if(c == 2008 || c == 1996 || c == 1984 || c == 1972 || c === 1960){
        zodiac = "You are a Rat  " + "<img src='Images/zodiac/rat.jpeg'/>";
    }
    if(c == 2007 || c == 1995 || c == 1983 || c == 1971 || c=== 2019){
        var zodiac = "You are a Pig, oinka" + "<img src='Images/zodiac/pig.jpeg'/>";
    }
    return zodiac;
}

/*function specialMessage(){
    return "Today you will die :(";
}*/

