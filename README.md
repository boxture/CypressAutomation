# automated_testing
Automated testing

A few guidelines (read rules :-)) writing a test file.

1. Describe the TEST CASE(S) and give each test case a [STATUS]
2. If an issue is found create a ticket, label the ticket with 'cypress' and refer this as a KNOWN ISSUE(S) in the .js file.
3. Link the number of the issue to the block of code.

Template:

// TEST CASES:
// 1. test case 1 [DONE]
// 2  test case 2 [BUSY]
// 3. test case 3 [PENDING]

// KNOWN ISSUES:
// https://github.com/boxture/oms/issues/0001: issue description 
// https://github.com/boxture/oms/issues/0002: issue description
// https://github.com/boxture/oms/issues/0003: issue description

// // test case 1 - #0001
      line 1
        line 2
        line 3
