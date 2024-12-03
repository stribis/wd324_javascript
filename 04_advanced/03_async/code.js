// syncronous code

/*
console.log("start");

function wait(ms) {
  let start = Date.now();

  // es wird solange gewartet
  // bis die aktuelel Zeit grösser ist als die Startzeit + ms
  while (Date.now() < start + ms) {
    console.log("hey");
  }
}

wait(500);

console.log("end");
*/

// Das grosse Problem hier ist, dass wir um die definierte Sekunden lang
// warten, bevor wir "end" in der Konsole sehen.
// Das heisst der User ist für definierte Sekunden Sekunden blockiert.

// Um das zu verhindern, können wir asynchrone Funktionen verwenden.

/* ASYNC JAVASCRIPT */
// Asynchrone Funktionen sind Funktionen, die nicht blockieren.
// Das bedeutet dass der User nicht blockiert ist,
// während die Funktion im Hintergrund ausgeführt wird.
// Das wird anhand Callback-Funktionen, Promises und async/await erreicht.

// 1. Callback-Funktionen
// Callback-Funktionen sind Funktionen,
// die einer anderen Funktion als Argument übergeben werden.
// um es dann zu einem späteren Zeitpunkt aufzurufen.
// Callbacks können synchron oder asynchron
// Ein Beispiel für eine asynchrone Callback-Funktion ist setTimeout.

/*
console.log("start");

setTimeout(() => {
  // dies ist asynchron, weil diese console.log
  // ganz am schluss afugerufen wird
  console.log("timeout");
}, 2000);

console.log("end");
*/

/*
Erklärung:
1. console.log("start") wird als erstes ausgeführt.
2. setTimout wird aufgerufen, die Callback-Funktion wird in die Warteschlange gestellt.
3. console.log("end") wird ausgeführt.
4. 2 Sekunden später wird die Callback-Funktion ausgeführt.
*/

// 2. Promises
// Promises sind eingebaute Objekte in JavaScript,
// die asynchrone Operationen repräsentieren.
// Ein Promise hat jeweils drei Zustände:
// pending: Der inizialie Zustand, weder erfüllt noch abgelehnt.
// fulfilled: Die Operation wurde erfolgreich abgeschlossen.
// rejected: Die Operation ist fehlgeschlagen.
// Promises haben auch noch drei methoden:
// then: wird ausgeführt, wenn das promise erfolgreich erfüllt wurde
// catch: wird ausgeführt, wenn das promise abgelehnt wurde (error state)
// finally: wird immer ausgeführt, egal welcher zustand

console.log("start");

/* new Promise(() => {}) */
let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("timeout");
  }, 2000);
});

/* This is a bad example of a then chaining and the
    the data is not modified in the next then

promise
  .then((data) => {
    return data;
  })
  .then((modifiedData) => {
    return modifiedData;
  })
  .then((modifiedDatax2) => {
    return modifiedDatax2;
  })
  .then()
  .catch()
  .finally();
*/

promise
  .then((message) => {
    // wenn du den catch error simlueren willst: throw new Error("error");
    // diese message referenziert die "timeout" in der setTimeout Funktion
    // hier muss ich auf das objekt zugreifen
    // welches vom backend als fullfilled zurückgegeben wurde
    console.log(message);
  })
  .catch((error) => {
    console.error("in catch", error);
    // da kommt es nie rein aktuell, da die funktion
    // immer erfolgreich ist
    // der catch wird ausgeführt, wenn im promise ein error existiert
    // sobald ein error vorhanden, dann bricht es das ganze ab
    // und geht unverzüglich in den catch block
    console.error(error);
  })
  .finally(() => {
    // dies wird immer ausgeführt, egal ob der request
    // erfolgreich war oder nicht
    console.log("finally");
  });

console.log("end");
