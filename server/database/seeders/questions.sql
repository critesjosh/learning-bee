INSERT INTO questions (id, name_, text, test_id) 
VALUES (1, 'Question 1', 'This is the first question', 1);
INSERT INTO questions (id, name_, text, test_id) 
VALUES (2, 'Question 2', 'This is the second question', 1);
INSERT INTO questions (id, name_, text, test_id) 
VALUES (3, 'Question 3', 'This is the third question', 1);
INSERT INTO questions (id, name_, text, test_id) 
VALUES (4, 'Question 4', 'This is the fourth question', 1);

INSERT INTO responses (id, text, correct, question_id) 
VALUES (1, 'Yes', true, 1);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (2, 'No', false, 1);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (3, 'Yes', true, 2);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (4, 'No', false, 2);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (5, 'Yes', true, 3);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (6, 'No', false, 3);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (7, 'Yes', true, 4);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (8, 'No', false, 4);