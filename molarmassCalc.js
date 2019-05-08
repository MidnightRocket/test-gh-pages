function molarmasseCalculator(callingObject, targetName) {
  /*if (!(isNaN((callingObject.value.slice(0, 1) * 1))) || /(^\d{1,40}(?=[A-Z])|(\((g|G)\)|\((s|S)\)|\((l|L)\)|\((aq|AQ|Aq|qA)\))$|\s)/g.test(callingObject.value)) {
    //number as first entry gets removed
    callingObject.value = callingObject.value.replace(/(^\d{1,40}(?=[A-Z])|(\((g|G)\)|\((s|S)\)|\((l|L)\)|\((aq|AQ|Aq|qA)\))\s*$|\s)/g, "")
  }/**/
  temp = MWcalc(callingObject.value);

  if (temp["molarmass"] == "unkown chemical.") {
    document.getElementsByName(targetName).forEach(function(target) {
      target.value = "Unkown chemical";
    });
  } else {
    document.getElementsByName(targetName).forEach(function(target) {
      target.value = temp["molarmass"];
    });
    /*⬆︎ loops through earch object with targetName, and sets a value
    https://www.w3schools.com/js/js_array_iteration.asp
    */
  }

  return false;

}

function MWcalc(input) {
  var results = new Array();

  if ( /*input == ""*/ /^(|\+{1,}|\-{1,})$/g.test(input)) {
    //no input
    results["molarmass"] = ""
  } else

  {
    //Semingly OK input
    input = MWparser(input)

    results["calculations"] = input.replace(/\./g, ",") //replaces . with , as decimalpoint

    try {
      calculated = Math.round(eval(input) * 1) / 1;
      //replaces . with , as decimalpoint
      results["molarmass"] = calculated.toString().replace(/\./g, ",")
    } catch (err) {
      results["molarmass"] = "unkown chemical."
    }
  }

  return results;
}


function MWparser(str) {
  //str = str.replace(/^\d{1,40}(?=[A-Z])/g, "") //removes leading numbers
  str = str.replace(/(^\d{1,40}(?=[A-Z])|(\((g|G)\)|\((s|S)\)|\((l|L)\)|\((aq|AQ|Aq|qA)\))\s*$|\s|\+|\-)/g, "") // removes leading numbers and following form or stage tag. i.e (aq)
  str = str.replace(/\((\||I|l){1,3}\)/g, "")
  str = str.replace(/^\d{1,}(?=[A-Z])/g, "error") //if first character is number then "error"
  str = str.replace(/(\,|\*|•|\u2022)(\d{0,3})(H)(2)(O)$/g, "+(1*$2*(1.008*$4+16.00))") //support for indlejret vand

  str = str.replace(/He/g, "+4.003*")
  str = str.replace(/Li/g, "+6.941*")
  str = str.replace(/Be/g, "+9.012*")
  str = str.replace(/Ne/g, "+20.18*")
  str = str.replace(/Na/g, "+22.99*")
  str = str.replace(/Mg/g, "+24.31*")
  str = str.replace(/Al/g, "+26.98*")
  str = str.replace(/Si/g, "+28.09*")
  str = str.replace(/Cl/g, "+35.45*")
  str = str.replace(/Ar/g, "+39.95*")
  str = str.replace(/Ca/g, "+40.08*")
  str = str.replace(/Sc/g, "+44.96*")
  str = str.replace(/Ti/g, "+47.87*")
  str = str.replace(/Cr/g, "+52.00*")
  str = str.replace(/Mn/g, "+54.94*")
  str = str.replace(/Fe/g, "+55.85*")
  str = str.replace(/Co/g, "+58.93*")
  str = str.replace(/Ni/g, "+58.69*")
  str = str.replace(/Cu/g, "+63.55*")
  str = str.replace(/Zn/g, "+65.41*")
  str = str.replace(/Ga/g, "+69.72*")
  str = str.replace(/Ge/g, "+72.64*")
  str = str.replace(/As/g, "+74.92*")
  str = str.replace(/Se/g, "+78.96*")
  str = str.replace(/Br/g, "+79.90*")
  str = str.replace(/Kr/g, "+83.80*")
  str = str.replace(/Rb/g, "+85.47*")
  str = str.replace(/Sr/g, "+87.62*")
  str = str.replace(/Zr/g, "+91.22*")
  str = str.replace(/Nb/g, "+92.91*")
  str = str.replace(/Mo/g, "+95.94*")
  str = str.replace(/Ru/g, "+101.1*")
  str = str.replace(/Rh/g, "+102.9*")
  str = str.replace(/Pd/g, "+106.4*")
  str = str.replace(/Ag/g, "+107.9*")
  str = str.replace(/Cd/g, "+112.4*")
  str = str.replace(/In/g, "+114.8*")
  str = str.replace(/Sn/g, "+118.7*")
  str = str.replace(/Sb/g, "+121.8*")
  str = str.replace(/Te/g, "+127.6*")
  str = str.replace(/Xe/g, "+131.3*")
  str = str.replace(/Cs/g, "+132.9*")
  str = str.replace(/Ba/g, "+137.3*")
  str = str.replace(/La/g, "+138.9*")
  str = str.replace(/Ce/g, "+140.1*")
  str = str.replace(/Pr/g, "+140.9*")
  str = str.replace(/Nd/g, "+144.2*")
  str = str.replace(/Sm/g, "+150.4*")
  str = str.replace(/Eu/g, "+152.0*")
  str = str.replace(/Gd/g, "+157.3*")
  str = str.replace(/Tb/g, "+158.9*")
  str = str.replace(/Dy/g, "+162.5*")
  str = str.replace(/Ho/g, "+164.9*")
  str = str.replace(/Er/g, "+167.3*")
  str = str.replace(/Tm/g, "+168.9*")
  str = str.replace(/Yb/g, "+173.0*")
  str = str.replace(/Lu/g, "+175.0*")
  str = str.replace(/Hf/g, "+178.5*")
  str = str.replace(/Ta/g, "+180.9*")
  str = str.replace(/Re/g, "+186.2*")
  str = str.replace(/Os/g, "+190.2*")
  str = str.replace(/Ir/g, "+192.2*")
  str = str.replace(/Pt/g, "+195.1*")
  str = str.replace(/Au/g, "+197.0*")
  str = str.replace(/Hg/g, "+200.6*")
  str = str.replace(/Tl/g, "+204.4*")
  str = str.replace(/Pb/g, "+207.2*")
  str = str.replace(/Bi/g, "+209.0*")
  str = str.replace(/Th/g, "+232.0*")
  str = str.replace(/Pa/g, "+231.0*")
  str = str.replace(/Tc/g, "+98*")
  str = str.replace(/Pm/g, "+145*")
  str = str.replace(/Po/g, "+209*")
  str = str.replace(/At/g, "+210*")
  str = str.replace(/Rn/g, "+222*")
  str = str.replace(/Fr/g, "+223*")
  str = str.replace(/Ra/g, "+226*")
  str = str.replace(/Ac/g, "+227*")
  str = str.replace(/Np/g, "+237*")
  str = str.replace(/Pu/g, "+244*")
  str = str.replace(/Am/g, "+243*")
  str = str.replace(/Cm/g, "+247*")
  str = str.replace(/Bk/g, "+247*")
  str = str.replace(/Cf/g, "+251*")
  str = str.replace(/Es/g, "+252*")
  str = str.replace(/Fm/g, "+257*")
  str = str.replace(/Md/g, "+258*")
  str = str.replace(/No/g, "+259*")
  str = str.replace(/Lr/g, "+262*")
  str = str.replace(/Rf/g, "+261*")
  str = str.replace(/Db/g, "+262*")
  str = str.replace(/Sg/g, "+266*")
  str = str.replace(/Bh/g, "+264*")
  str = str.replace(/Hs/g, "+277*")
  str = str.replace(/Mt/g, "+268*")
  str = str.replace(/Ds/g, "+281*")
  str = str.replace(/Rg/g, "+272*")
  str = str.replace(/Uub/g, "+285*")
  str = str.replace(/Uut/g, "+284*")
  str = str.replace(/Uuq/g, "+289*")
  str = str.replace(/Uup/g, "+288*")
  str = str.replace(/Uuh/g, "+291*")
  str = str.replace(/Uuo/g, "+294*")
  str = str.replace(/H/g, "+1.008*")
  str = str.replace(/B/g, "+10.81*")
  str = str.replace(/C/g, "+12.01*")
  str = str.replace(/N/g, "+14.01*")
  str = str.replace(/O/g, "+16.00*")
  str = str.replace(/F/g, "+19.00*")
  str = str.replace(/P/g, "+30.97*")
  str = str.replace(/S/g, "+32.07*")
  str = str.replace(/V/g, "+50.94*")
  str = str.replace(/Y/g, "+88.91*")
  str = str.replace(/U/g, "+238.0*")
  str = str.replace(/K/g, "+39.10*")
  str = str.replace(/I/g, "+126.9*")
  str = str.replace(/W/g, "+183.8*")

  str = str.replace(/\*\(\+/g, "+(")
  str = str.replace(/\(\+/g, "+(")
  str = str.replace(/\)/g, ")*")
  str = str.replace(/\*\)/g, ")")
  str = str.replace(/\*\+/g, "+")
  str = str.replace(/\+\+/g, "+")
  str = str.replace(/\*\*/g, "*")

  if (str.substring(0, 1) == "+")
    str = str.substring(1)

  if (str.substring(str.length - 1) == "*")
    str = str.substring(0, str.length - 1)

  return str;
}


function shiftColumn(object, columnNumber){
  if (typeof object == 'object') {
    object = object.name;
  }
  var targetName = object.replace(/(row\d{1,2}Column)\d{1,2}/g, '$1'+columnNumber);
  return targetName;
}
function shiftRow(object, rowNumber){
  if (typeof object == 'object') {
    object = object.name;
  }
  var targetName = object.replace(/(row)\d{1,2}(Column\d{1,2})/g, '$1'+rowNumber+'$2');
  return targetName;
}

function coreMolarCalcEngine(callingObject){
  molarmasseCalculator(callingObject,shiftRow(callingObject,2));
  setRatio(callingObject,shiftRow(callingObject,4));
}

function setRatio(callingObject, targetName){ // henter det første tal ind.
  var ratio = function(){
    if (/^(\d{1,9})/.test(callingObject.value)) {
      return /^(\d{1,9})/.exec(callingObject.value)[1];
    } else {
      return 1
    }
  }();
  console.log(ratio);
  //.replace(/^(\d{1,})*./g,'$1');
  document.getElementsByName(targetName).forEach(function(target) {
    target.value = ratio;
  });
}
