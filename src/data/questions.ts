import { questionsPart2 } from './questionsPart2';

export type TableSchema = {
  name: string;
  columns: { name: string; isKey?: boolean }[];
  rows?: string[][];
};

export type Option = {
  id: string; // 'A', 'B', 'C', 'D'
  text?: string;
  code?: string;
  uiRender?: string;
};

export type Question = {
  id: number;
  text: string;
  tag?: string;
  codeSnippet?: string;
  language?: string;
  imageDescription?: string;
  diagram?: string;
  tables?: TableSchema[];
  options: Option[];
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    text: 'Computing is defined as:',
    options: [
      { id: 'A', text: 'Any goal-oriented activity requiring, benefiting from, or creating computers' },
      { id: 'B', text: 'An algorithm that uniquely represents symbols from some source alphabet, which may be in some other target alphabet' },
      { id: 'C', text: 'A deliberate process that transforms one or more inputs into one or more results, with variable change' },
      { id: 'D', text: 'A process of discovering and resolving defects that prevent correct operation of computer software or a system' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 2,
    text: 'Assume variable x holds 5 and variable z holds 15. Which of the following condition is TRUE?',
    options: [
      { id: 'A', text: '(x !< z)' },
      { id: 'B', text: '(x == z)' },
      { id: 'C', text: '(x <= z)' },
      { id: 'D', text: '(x >= z)' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 3,
    text: 'The Bootstrap grid system is based on _______________ columns.',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '24' },
      { id: 'C', text: '9' },
      { id: 'D', text: '6' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 4,
    text: 'Which of the following is a typical activity in the creation of a program?',
    options: [
      { id: 'A', text: 'Prototyping' },
      { id: 'B', text: 'Project Management' },
      { id: 'C', text: 'Rapid Application' },
      { id: 'D', text: 'Debugging' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 5,
    text: 'The image shown below depicts a:',
    tables: [
      {
        name: 'Flights',
        columns: [
          { name: 'Flight_ID', isKey: true },
          { name: 'Date' },
          { name: 'From_Dest' },
          { name: 'To_Dest' }
        ]
      },
      {
        name: 'Booking_Flights',
        columns: [
          { name: 'Booking_ID', isKey: true },
          { name: 'Flight_ID', isKey: true }
        ]
      },
      {
        name: 'Booking',
        columns: [
          { name: 'Booking_ID', isKey: true },
          { name: 'Date' },
          { name: 'Customer_ID', isKey: true }
        ]
      },
      {
        name: 'Customer',
        columns: [
          { name: 'Customer_ID', isKey: true },
          { name: 'Name' },
          { name: 'Surname' }
        ]
      }
    ],
    options: [
      { id: 'A', text: 'Class Diagram' },
      { id: 'B', text: 'Database Schema' },
      { id: 'C', text: 'Component Diagram' },
      { id: 'D', text: 'User Interface Mock-up' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 6,
    text: '_______ defines "a flexible, holistic product development strategy where a development team works as a unit to reach a common goal".',
    options: [
      { id: 'A', text: 'Scrum' },
      { id: 'B', text: 'DevOps' },
      { id: 'C', text: 'Agile' },
      { id: 'D', text: 'Project Management' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 7,
    text: 'The image shown below depicts a _______________ architecture.',
    diagram: 'architecture',
    options: [
      { id: 'A', text: 'Client-Server' },
      { id: 'B', text: 'Thick Client' },
      { id: 'C', text: '3-tier architecture' },
      { id: 'D', text: 'Web application' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 8,
    text: '“An interaction diagram that shows how objects operate with one another and in what order” is called a:',
    options: [
      { id: 'A', text: 'Flowchart' },
      { id: 'B', text: 'Sequence Diagram' },
      { id: 'C', text: 'State Transition Diagram' },
      { id: 'D', text: 'Class Diagram' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 9,
    text: 'What does the sleep command (UNIX Command line) do?',
    options: [
      { id: 'A', text: 'Write arguments to standard output' },
      { id: 'B', text: 'Evaluate arguments as an expression' },
      { id: 'C', text: 'Execute a simple command' },
      { id: 'D', text: 'Suspend execution for an interval' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 10,
    text: 'Which of the following is an interpreted programming language?',
    options: [
      { id: 'A', text: 'Delphi' },
      { id: 'B', text: 'ADA' },
      { id: 'C', text: 'C#' },
      { id: 'D', text: 'JavaScript' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 11,
    text: 'Consider the snippet below. How many times will the 1st loop shown in the code below be executed?',
    codeSnippet: `def main():\n    w=list(range(7))\n    for i in range(len(w)):\n        w[i]=i+10;\n    for j in range(len(w)):\n        print("ListElement[{0}]={1}".format(j, w[j]))\nif __name__ == "__main__":\n    main()`,
    language: 'python',
    options: [
      { id: 'A', text: 'None' },
      { id: 'B', text: 'Six' },
      { id: 'C', text: 'One' },
      { id: 'D', text: 'Seven' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 12,
    text: 'What is GitHub?',
    options: [
      { id: 'A', text: 'A control repository hosting service' },
      { id: 'B', text: 'An IDE' },
      { id: 'C', text: 'A Compiler' },
      { id: 'D', text: 'A Static Analysis tool for code review' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 13,
    text: 'A _______________ method can call itself either directly or indirectly through another method.',
    options: [
      { id: 'A', text: '…overloading…' },
      { id: 'B', text: '…global…' },
      { id: 'C', text: '…recursive…' },
      { id: 'D', text: '…iterative…' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 14,
    text: `Consider the following database table:\nCANDIDATES(candcode, name, surname, email, phone_no, date_of_birth);\nWhich of the following queries would display all the students whose surname starts with the character F?`,
    options: [
      { id: 'A', text: "SELECT surname FROM candidates WHERE surname LIKE 'F%';" },
      { id: 'B', text: "SELECT surname FROM candidates WHERE surname LIKE '%F';" },
      { id: 'C', text: "SELECT surname FROM candidates WHERE surname LIKE '%F%';" },
      { id: 'D', text: "SELECT surname FROM candidates WHERE surname LIKE 'F';" }
    ],
    correctAnswer: 'A'
  },
  {
    id: 15,
    text: 'A collection of instructions that performs a specific task when executed by a computer or device is called a(n):',
    options: [
      { id: 'A', text: 'Algorithm' },
      { id: 'B', text: 'Application' },
      { id: 'C', text: 'Calculation' },
      { id: 'D', text: 'Data' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 16,
    text: `Consider the following database table:\nCandidates(candID, name, surname, email, phone_no, date_of_birth);\nWhich SQL statement would retrieve all fields and records from the table named Candidates, where the value of the field candID is 777?`,
    options: [
      { id: 'A', text: 'SELECT * FROM Candidates WHERE candID =777' },
      { id: 'B', text: 'SELECT name FROM Candidates WHERE candID =777' },
      { id: 'C', text: 'SELECT * FROM Candidates WHERE candID LIKE 777' },
      { id: 'D', text: "SELECT surname FROM Candidates WHERE candID =’777’" }
    ],
    correctAnswer: 'A'
  },
  {
    id: 17,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: `class Program:\n    __x=0;\n    @staticmethod\n    def getX():\n        return Program.__x\n    @staticmethod\n    def setX(x1):\n        Program.__x=x1\nprint("Output={0}".format(Program.getX()))`,
    language: 'python',
    options: [
      { id: 'A', text: 'Compiler Error' },
      { id: 'B', text: 'Output = x1' },
      { id: 'C', text: 'Output =Output = 0' },
      { id: 'D', text: 'Output=0' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 18,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: `class Gems:\n    _value=21;\nclass Square:\n    @staticmethod\n    def main():\n        Gems._value+=1\n        print(Gems._value)\nSquare.main()`,
    language: 'python',
    options: [
      { id: 'A', text: 'Compiler Error' },
      { id: 'B', text: '0' },
      { id: 'C', text: '22' },
      { id: 'D', text: '21' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 19,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: `<html lang="en">\n<head>\n    <meta charset="utf-8"/>\n    <title></title>\n<body>\n{% set arr = [1,3,5,7,11,13,17,19] %}\n{% for item in arr %}\n    <span>{{item}}, </span>\n{% endfor %}\n</body>\n</html>`,
    language: 'html',
    options: [
      { id: 'A', text: '1, 3, 5, 7, 11, 13, 17, 19' },
      { id: 'B', text: '1, 3, 5, 7, 11, 13, 17,' },
      { id: 'C', text: '3, 5, 7, 11, 19,' },
      { id: 'D', text: '1, 3, 5, 7, 11, 13, 17, 19,' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 20,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: `myar=[-2,0,2]\nfor element in myar:\n    print(f"{element}",end=" ")\nprint()\nfor i in range(len(myar)):\n    print(f"{myar[i]}", end=" ")\nprint()\ncount=0\nfor element in myar:\n    count+=1\n    print(f"Element #{count}:{element},")\nprint(f"Number of elements in array:{count}")`,
    language: 'python',
    options: [
      { id: 'A', text: '-2 0 2\n-2 0 2\nElement #1:-2,\nElement #2:0,\nElement #3:2,\nNumber of elements in array:3' },
      { id: 'B', text: '-2 0 2\nElement #1:-2,\nElement #2:0,\nElement #3:2,\nNumber of elements in array:2' },
      { id: 'C', text: 'Element #1:-2,\nElement #2:0,\nElement #3:2,\nNumber of elements in array:3' },
      { id: 'D', text: '-2 0 2\n-2 0 2\nElement #1:-2,\nElement #2:0,\nNumber of elements in array:2' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 21,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: 'x=z=100\nx+=1\nz=x+1\nprint("x is " + "%d"%x + " and z is "+"%d"%z )\nx=100\nx+=1\nz=x\nprint("x is " + "%d"%x + " and z is "+"%d"%z )',
    language: 'python',
    options: [
      { id: 'A', text: 'x is 101 and z is 101\nx is 101 and z is 101\nx is 102 and z is 101\nx is 102 and z is 101' },
      { id: 'B', text: 'x is 101 and z is 102\nx is 101 and z is 101' },
      { id: 'C', text: 'x is 102 and z is 102\nx is 102 and z is 102' },
      { id: 'D', text: 'Compiler Error' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 22,
    text: 'A(n) _______________ is an event that occurs when a program runs interrupting its normal flow.',
    options: [
      { id: 'A', text: '…comparison…' },
      { id: 'B', text: '…exception…' },
      { id: 'C', text: '…error…' },
      { id: 'D', text: '…stack trace…' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 23,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: 'a=[1,2,3,4,5]\nprint("a[" + "%d"%(a[6]) + "]")',
    language: 'python',
    options: [
      { id: 'A', text: '...Exception' },
      { id: 'B', text: '...exception...' },
      { id: 'C', text: 'IndexError: list index out of range' },
      { id: 'D', text: 'a[5]' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 24,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: 'myArray=[-1,1,3,5,7,9]\nfor x in range(len(myArray)):\n    if myArray[x]==3:\n        break\n    else:\n        print(f"{myArray[x]}", end=",")',
    language: 'python',
    options: [
      { id: 'A', text: '-1, 1, 3,' },
      { id: 'B', text: '-1, 1,' },
      { id: 'C', text: '3, 5, 7, 9,' },
      { id: 'D', text: '3' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 25,
    text: '_________ is a relationship where one class is part of another class.',
    options: [
      { id: 'A', text: 'Destructor' },
      { id: 'B', text: 'Composition' },
      { id: 'C', text: 'Association' },
      { id: 'D', text: 'Aggregation' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 26,
    text: 'A valid number for DECIMAL(10,3) is :',
    options: [
      { id: 'A', text: '1234567.123' },
      { id: 'B', text: '-12345678' },
      { id: 'C', text: '-12345678.12' },
      { id: 'D', text: '123456789.123' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 27,
    text: 'Consider the table named Customers, shown below.\nHow would we delete customer with ID equal to 3?',
    tables: [
      {
        name: 'Customers',
        columns: [
          { name: 'ID', isKey: true },
          { name: 'Name' },
          { name: 'Age' },
          { name: 'City' },
          { name: 'Salary' }
        ],
        rows: [
          ['1', 'Anna', '32', 'NY', '10000'],
          ['2', 'Sofia', '25', 'NY', '7500'],
          ['3', 'Marv', '23', 'LA', '5500'],
          ['4', 'John', '25', 'ATH', '4500'],
          ['5', 'Alex', '27', 'ATH', '6500'],
          ['6', 'Gus', '22', 'DEN', '8500'],
          ['7', 'Nick', '28', 'ATH', '2500']
        ]
      }
    ],
    options: [
      { id: 'A', text: 'DELETE FROM CUSTOMERS WHERE ID = 3;' },
      { id: 'B', text: 'DELETE WHERE ID = 3;' },
      { id: 'C', text: 'DELETE FROM ID WHERE 3;' },
      { id: 'D', text: 'DELETE * FROM CUSTOMERS;' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 28,
    text: 'Given the CUSTOMERS table below, how would you update the City of Anna to ATH?',
    tables: [
      {
        name: 'Customers',
        columns: [
          { name: 'ID', isKey: true },
          { name: 'Name' },
          { name: 'Age' },
          { name: 'City' },
          { name: 'Salary' }
        ],
        rows: [
          ['1', 'Anna', '32', 'NY', '10000'],
          ['2', 'Sofia', '25', 'NY', '7500'],
          ['3', 'Marv', '23', 'LA', '5500'],
          ['4', 'John', '25', 'ATH', '4500'],
          ['5', 'Alex', '27', 'ATH', '6500'],
          ['6', 'Gus', '22', 'DEN', '8500'],
          ['7', 'Nick', '28', 'ATH', '2500']
        ]
      }
    ],
    options: [
      { id: 'A', text: "UPDATE CUSTOMERS SET CITY = 'ATH' WHERE ID='Anna';" },
      { id: 'B', text: "UPDATE CUSTOMERS SET CITY = 'ATH' WHERE ID=1;" },
      { id: 'C', text: "UPDATE CITY SET CITY = 'ATH' WHERE ID=1;" },
      { id: 'D', text: 'UPDATE CUSTOMERS SET CITY = \'ATH\' , ID = "Anna";' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 29,
    text: 'What does SQL stand for?',
    options: [
      { id: 'A', text: 'Standard Query Language' },
      { id: 'B', text: 'Structured Query Language' },
      { id: 'C', text: 'Standard Question Language' },
      { id: 'D', text: 'Structured Question Language' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 30,
    text: 'A record, is also called a ______',
    options: [
      { id: 'A', text: 'Column' },
      { id: 'B', text: 'Row' },
      { id: 'C', text: 'Field' },
      { id: 'D', text: 'Table' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 31,
    text: 'Organizing a database to reduce data redundancy and improve data integrity is called:',
    options: [
      { id: 'A', text: 'Database Design' },
      { id: 'B', text: 'Database Integrity' },
      { id: 'C', text: 'Normalization' },
      { id: 'D', text: 'Relationships' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 32,
    text: 'What is a Database trigger?',
    options: [
      { id: 'A', text: 'Procedural code that is automatically executed in response to certain events on a particular table' },
      { id: 'B', text: 'A segment of declarative SQL statements stored inside the database catalog' },
      { id: 'C', text: 'A 3-Dimensional table in the database catalog' },
      { id: 'D', text: 'Code that is scheduled to run any number of times during a specific period' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 33,
    text: 'Which of the following tags defines an unordered list in HTML?',
    options: [
      { id: 'A', text: '<ul>' },
      { id: 'B', text: '<ol>' },
      { id: 'C', text: '<li>' },
      { id: 'D', text: '<h1>' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 34,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: 'import abc\nclass Shapes(metaclass=abc.ABCMeta):\n    @abc.abstractmethod\n    def Area(self):\n        pass\nclass Square(Shapes):\n    def __init__(self,side):\n        self.__side=side\n    def Area(self):\n        return self.__side*self.__side\n\nclass Interface(abc.ABC):\n    @abc.abstractmethod\n    def M(self):\n        pass\n\nclass C(Interface,metaclass=abc.ABCMeta):\n    def M(self):\n        return\n\nsq=Square(15)\nprint(f"Area of square={sq.Area()}")',
    language: 'python',
    options: [
      { id: 'A', text: 'Area of square =' },
      { id: 'B', text: 'Area of square = 225' },
      { id: 'C', text: 'Area of square = 15' },
      { id: 'D', text: 'Compiler Error' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 35,
    text: 'What would happen if we used the code below in a CSS?\nli { text-align: left; }\nli:nth-child(even) { text-align: right; }',
    codeSnippet: 'li { text-align: left; }\nli:nth-child(even) { text-align: right; }',
    language: 'css',
    options: [
      { id: 'A', text: 'Every paragraph of our website would have alternate text alignment (left, right, left etc.)' },
      { id: 'B', text: 'Every lists’ items of our website would have alternate text alignment (right, left, right etc.)' },
      { id: 'C', text: 'Every lists’ items of our website would have alternate text alignment (left, right, left etc.)' },
      { id: 'D', text: 'Every paragraph of our website would have alternate text alignment (right, left, right etc.)' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 36,
    text: 'Consider the code snippet below:\nWhat color would the word "Hello" be displayed in?',
    codeSnippet: '<style>\n    #redText {color: green;}\n</style>\n.....\n<span id="redText" style="color: blue;">Hello</span>\n<span id="redText">HEY!</span>\n\n</body>\n</html>',
    language: 'html',
    options: [
      { id: 'A', text: 'Green' },
      { id: 'B', text: 'Red' },
      { id: 'C', text: 'Black' },
      { id: 'D', text: 'Blue' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 37,
    text: 'Consider the code snippet below:\nWhat would this code do?',
    codeSnippet: '<script>\n$(document).ready(function(){\n    $("button").click(function(){\n        $("p").hide();\n    });\n});\n</script>',
    language: 'html',
    options: [
      { id: 'A', text: 'When the button is clicked it will hide all paragraphs' },
      { id: 'B', text: 'When the button is clicked it will show all paragraphs' },
      { id: 'C', text: 'When the mouse hovers over the button it will highlight all paragraphs' },
      { id: 'D', text: 'When the mouse hovers over the button it will select all paragraphs' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 38,
    text: 'Consider the code snippet below:\nWhat would be the outcome of this loop be?',
    codeSnippet: "while (true) {\n    console.log('Hello, world!');\n}",
    language: 'javascript',
    options: [
      { id: 'A', text: 'Hello, world!' },
      { id: 'B', text: 'Null' },
      { id: 'C', text: 'Infinite loop' },
      { id: 'D', text: 'false' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 39,
    text: 'The focus of OOP languages is not on _______, but on __________.',
    options: [
      { id: 'A', text: 'structure/modeling data' },
      { id: 'B', text: 'modeling data/ structure' },
      { id: 'C', text: 'classes/procedures' },
      { id: 'D', text: 'objects/procedures' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 40,
    text: 'Inheritance represents:',
    options: [
      { id: 'A', text: 'HAS-A relationship' },
      { id: 'B', text: 'IS-A relationship' },
      { id: 'C', text: 'A relationship among multiple classes' },
      { id: 'D', text: 'A relationship among multiple objects' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 41,
    text: 'A(n) ____________ does not allow duplicates, null values but can consist of multiple columns.',
    options: [
      { id: 'A', text: 'Foreign Key' },
      { id: 'B', text: 'Relationship' },
      { id: 'C', text: 'Index' },
      { id: 'D', text: 'Primary Key' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 42,
    text: 'Assume you have the following table named People.\nWhich of the following statements returns the FirstName and City of the people that are older than 60yo, and her/his FirstName starts with M, ordered by City?',
    tables: [
      {
        name: 'People',
        columns: [
          { name: 'FirstName' },
          { name: 'LastName' },
          { name: 'Address' },
          { name: 'City' },
          { name: 'Age' }
        ],
        rows: [
          ['Mickey', 'Mouse', '123 Fantasy Way', 'Anaheim', '73'],
          ['Bat', 'Man', '321 Cavern Ave', 'Gotham', '54'],
          ['Wonder', 'Woman', '987 Truth Way', 'Paradise', '39'],
          ['Donald', 'Duck', '555 Quack Street', 'Mallard', '65'],
          ['Bugs', 'Bunny', '567 Carrot Street', 'Rascal', '58'],
          ['Wiley', 'Coyote', '999 Acme Way', 'Canyon', '61'],
          ['Cat', 'Woman', '234 Purrfect Street', 'Hairball', '32'],
          ['Tweety', 'Bird', '543', 'Itotitaw', '28']
        ]
      }
    ],
    options: [
      { id: 'A', text: "SELECT FirstName, City from People\nWHERE Age>60\nAND FirstName LIKE 'M%'\nORDERED BY City;" },
      { id: 'B', text: "SELECT FirstName from People\nWHERE Age>=60\nAND FirstName LIKE 'M%'\nORDERED BY City;" },
      { id: 'C', text: "SELECT FirstName, City from People\nWHERE Age>60\nOR FirstName LIKE 'M%'\nORDERED BY City;" },
      { id: 'D', text: "SELECT FirstName from People\nWHERE Age<60\nAND FirstName LIKE 'M%'\nORDERED BY City;" }
    ],
    correctAnswer: 'A'
  },
  {
    id: 43,
    text: 'Assume you have two classes, named myOb1 and myOb2.\nWhat kind of relationship do these objects share, when myOb1 holds an instance of myOb2, called a, but a can live on after the destruction of the myOb1’s instance?',
    options: [
      { id: 'A', text: 'Subclass' },
      { id: 'B', text: 'Composition' },
      { id: 'C', text: 'Association' },
      { id: 'D', text: 'Aggregation' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 44,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: 'a=[0,1,2,3,4,5,6,7]\nfor i in range(2,-1,-1):\n    print("a["+"%d"%i+"]="+"%d"%(a[i]),end=", ")',
    language: 'python',
    options: [
      { id: 'A', text: 'a[2]=3, a[1]=2, a[0]=1,' },
      { id: 'B', text: 'a[0]=2, a[1]=1, a[2]=0,' },
      { id: 'C', text: 'a[2]=2, a[1]=1, a[0]=0,' },
      { id: 'D', text: 'a[2]=1, a[1]=2, a[0]=3,' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 45,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: 'class AB:\n    def Display(self):\n        print("AB::Display")\nclass DA(AB):\n    def Display(self):\n        print("DA::Display")\nif __name__ == "__main__":\n    b=AB()\n    b.Display()\n    b=DA()\n    b.Display()',
    language: 'python',
    options: [
      { id: 'A', text: 'AB::Display\nDA::Display' },
      { id: 'B', text: 'DA::Display\nAB::Display' },
      { id: 'C', text: 'DA::Display\nDA::Display' },
      { id: 'D', text: 'AB::Display\nAB::Display' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 46,
    text: 'Consider the code snippet below:\nThis code:',
    codeSnippet: '<?xml version="1.0" encoding="UTF-8"?>\n<note>\n  <to>Panos</to>\n  <from>Stacey</Ffrom>\n  <heading>Reminder</heading>\n  <body>Don\'t forget we have exams this weekend!</body>\n</note>',
    language: 'xml',
    options: [
      { id: 'A', text: 'Has a syntax error' },
      { id: 'B', text: 'Is error free' },
      { id: 'C', text: 'Is not standard XML code' },
      { id: 'D', text: 'Is JavaScript, not XML' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 47,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: '<!DOCTYPE html>\n<html>\n<body>\n<button\nonclick="document.getElementById(\'demo\').innerHTML=Date()">The time\nis?</button>\n<p id="demo"></p>\n</body>\n</html>',
    language: 'html',
    options: [
      { id: 'A', text: 'Create a button, which when clicked will take us to the InnerHTML page' },
      { id: 'B', text: 'Create a link named The time is?, which when clicked will take us to a page with the current date and time' },
      { id: 'C', text: 'Create a link named Demo, which when clicked internally navigate to an area where a preset date is displayed' },
      { id: 'D', text: 'Create a button, which when clicked will display the current date and time' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 48,
    text: 'Consider the code snippet below:\nWhat is the expected output?',
    codeSnippet: '<form class="form-inline">\n  <div class="form-group">\n    <label for="email">Email address:</label>\n    <input type="email" class="form-control" id="email">\n  </div>\n  <div class="form-group">\n    <label for="pwd">Password:</label>\n    <input type="password" class="form-control" id="pwd">\n  </div>\n  <div class="checkbox">\n    <label><input type="checkbox"> Remember me</label>\n  </div>\n  <button type="submit" class="btn btn-default">Submit</button>\n</form>',
    language: 'html',
    options: [
      { id: 'A', text: 'An inline form with two input fields, one checkbox, and one submit button' },
      { id: 'B', text: 'A vertical form with one input field, two checkbox, and one submit button' },
      { id: 'C', text: 'A horizontal form with two input fields, one checkbox, and one submit button' },
      { id: 'D', text: 'An inline form with one input field and one submit button' }
    ],
    correctAnswer: 'A'
  },
  {
    id: 49,
    text: 'You are modifying a Django MVC web application and you have created a base “skeleton” template.\nWhich tag is used to define code segments that child templates can override?',
    options: [
      { id: 'A', text: '{%extends “base.html” %}' },
      { id: 'B', text: '{% block content %} {% endblock %}' },
      { id: 'C', text: '<div id=”sidebar”> </div>' },
      { id: 'D', text: '<div id=”content”> </div>' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 50,
    text: 'The capability provided to consumers to use the provider’s applications running on a cloud infrastructure is also known as:',
    options: [
      { id: 'A', text: 'Platform as a Service (PaaS)' },
      { id: 'B', text: 'Infrastructure as a Service (IaaS)' },
      { id: 'C', text: 'Software as a Service (SaaS)' },
      { id: 'D', text: 'Communication as a Service (CaaS)' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 51,
    text: '___________ means that a group of related properties, methods, and other members are treated as a single unit or object.',
    options: [
      { id: 'A', text: 'Abstraction' },
      { id: 'B', text: 'Encapsulation' },
      { id: 'C', text: 'Modularity' },
      { id: 'D', text: 'Inheritance' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 52,
    text: 'Which of the following is a phase of the software testing cycle?',
    options: [
      { id: 'A', text: 'Software Improvement' },
      { id: 'B', text: 'Time Management' },
      { id: 'C', text: 'Project Planning' },
      { id: 'D', text: 'Defect Retesting' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 53,
    text: '_______________ is the process of testing individual components in isolation',
    options: [
      { id: 'A', text: 'System testing' },
      { id: 'B', text: 'Integration testing' },
      { id: 'C', text: 'Unit testing' },
      { id: 'D', text: 'Acceptance testing' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 54,
    text: 'Assume Table Persons consists of the following columns (FirstName, LastName).\nWhich SQL statement would insert DIFRANCO as the LastName in the Persons table?',
    options: [
      { id: 'A', text: "INSERT INTO Persons (LastName) VALUES ('DIFRANCO')" },
      { id: 'B', text: "INSERT INTO Persons ('DIFRANC ') INTO LastName" },
      { id: 'C', text: "INSERT (' DIFRANCO ') INTO Persons(LastName)" },
      { id: 'D', text: "INSERT INTO Persons VALUES 'DIFRANCO'" }
    ],
    correctAnswer: 'A'
  },
  ...questionsPart2
];
