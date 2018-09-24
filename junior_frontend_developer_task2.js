/**
 * task2.js
 *
 * Hey! We want to log Array with valid emails
 * but it's not working right now :(
 * Something is missing in our code!
 *
 * Write transformEmails String static method that should return
 * Array with only valid emails
 */

// console.log('test@email.com,  test@mail, test+1@mail.net'.transformEmails());

/**
 *
 * SOLUTION
 *
 */

// Static method is a class method. It's called on an class, not an instance of a Class
// The above console log was adjusted to reflect that.
// Otherwise it's possible to add a method to String prototype, but I followed the task description.

/* eslint-disable prefer-rest-params, no-useless-escape, no-console */

// Solution ES5
// String.transformEmails = function() {
//   var argument = arguments[0];
//   var emailRegex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim; // eslint-disable-line
//   return argument.split(/\s+/).filter(email => emailRegex.test(email));
// };

// console.log(String.transformEmails('test@email.com,  test@mail, test+1@mail.net'));

// Solution ES6
class String {
  static transformEmails() {
    const emailRegex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim;
    return arguments[0].split(/\s+/).filter(email => emailRegex.test(email));
  }
}

console.log(
  String.transformEmails('test@email.com,  test@mail, test+1@mail.net')
);
