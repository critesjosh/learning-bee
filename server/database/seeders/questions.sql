INSERT INTO questions (id, name_, text, test_id) 
VALUES (1, 'Question 1', 'This is the first question', 1);
INSERT INTO questions (id, name_, text, test_id) 
VALUES (2, 'Question 2', 'This is the second question', 1);

INSERT INTO responses (id, text, correct, question_id) 
VALUES (1, 'Yes', true, 1);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (2, 'No', false, 1);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (3, 'Yes', true, 2);
INSERT INTO responses (id, text, correct, question_id) 
VALUES (4, 'No', false, 2);