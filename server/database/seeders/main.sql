INSERT INTO categorys (id, name_) VALUES (1, 'Math')
ON CONFLICT DO NOTHING;
INSERT INTO categorys (id, name_) VALUES (2, 'Science & engineering')
ON CONFLICT DO NOTHING;
INSERT INTO categorys (id, name_) VALUES (3, 'Chemistry')
ON CONFLICT DO NOTHING;
INSERT INTO categorys (id, name_) VALUES (4, 'Biology')
ON CONFLICT DO NOTHING;
INSERT INTO categorys (id, name_) VALUES (5, 'Arts and humanities')
ON CONFLICT DO NOTHING;
INSERT INTO categorys (id, name_) VALUES (6, 'Computing')
ON CONFLICT DO NOTHING;
INSERT INTO categorys (id, name_) VALUES (7, 'Economics $ finance')
ON CONFLICT DO NOTHING;

INSERT INTO courses (id, name_, description_, thumbnail_url, bonus_bounty, total_bounty, category_id) 
VALUES (1, 'Geometry | Early Math', 'Learn how to divide shapes into two or four equal sections.', 'https://i.ytimg.com/vi/0lSTXtwPuOU/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDQKkzZVeYGoYNT5ApZBBIfz89apA', 20, 180, 1)
ON CONFLICT DO NOTHING;
INSERT INTO courses (id, name_, description_, thumbnail_url, bonus_bounty, total_bounty, category_id) 
VALUES (2, 'Cosmology & Astronomy', 'First living things on land clarification (This video copyrighted under Create Commons Attribution and Share-Alike CC-BY-SA license). Created by Sal Khan.', 'https://i.ytimg.com/vi/3gUE_P9T-Wk/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCc2KcSJfCYoSKano0GR-kNzaNEUw', 35, 200, 2)
ON CONFLICT DO NOTHING;

INSERT INTO videos (id, name_, description_, thumbnail_url, youtube_id, length, category_id, bounty, course_id) 
VALUES (1, 'Halves and fourths', 'Learn how to divide shapes into two or four equal sections.', 'https://i.ytimg.com/vi/0lSTXtwPuOU/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDQKkzZVeYGoYNT5ApZBBIfz89apA', '0lSTXtwPuOU', 144, 1, 10, 1)
ON CONFLICT DO NOTHING;
INSERT INTO videos (id, name_, description_, thumbnail_url, youtube_id, length, category_id, bounty, course_id) 
VALUES (2, 'First living things on land clarification', 'The Earth is huge, but it is tiny compared to the Sun (which is super huge). But the Sun is tiny compared to the solar system which is tiny compared to the distance to the next star. ', 'https://i.ytimg.com/vi/3gUE_P9T-Wk/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCc2KcSJfCYoSKano0GR-kNzaNEUw', '3gUE_P9T-Wk', 334, 2, 15, 2)
ON CONFLICT DO NOTHING;
INSERT INTO videos (id, name_, description_, thumbnail_url, youtube_id, length, category_id, bounty, course_id) 
VALUES (3, 'Carbon 14 dating 2', 'The Earth is huge, but it is tiny compared to the Sun (which is super huge).', 'https://i.ytimg.com/vi/4YUtnod-YuE/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLABjMs_OaqmrXnp0_5MzsxT-YZTdg', '4YUtnod-YuE', 254, 2, 15, 2)
ON CONFLICT DO NOTHING;
INSERT INTO videos (id, name_, description_, thumbnail_url, youtube_id, length, category_id, bounty, course_id) 
VALUES (4, 'Recognizing shapes', 'Learn how to identify circles, triangles, squares, rectangles, rhombuses, and trapezoids.', 'https://i.ytimg.com/vi/10dTx1Zy_4w/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLA_Nh7T5rXrBGRN6G3P2GrLqV7g9A', '10dTx1Zy_4w', 368, 1, 30, 1)
ON CONFLICT DO NOTHING;

INSERT INTO tests (id, name_, bounty, video_id) 
VALUES (1, 'Halves and fourths Test', 40, 1)
ON CONFLICT DO NOTHING;
INSERT INTO tests (id, name_, bounty, video_id) 
VALUES (2, 'Halves and fourths Review', 80, 1)
ON CONFLICT DO NOTHING;

INSERT INTO questions (id, name_, text, test_id) 
VALUES (1, 'Question 1', 'This is the first question', 1)
ON CONFLICT DO NOTHING;
INSERT INTO questions (id, name_, text, test_id) 
VALUES (2, 'Question 2', 'This is the second question', 1)
ON CONFLICT DO NOTHING;
INSERT INTO questions (id, name_, text, test_id) 
VALUES (3, 'Question 3', 'This is the third question', 2)
ON CONFLICT DO NOTHING;
INSERT INTO questions (id, name_, text, test_id) 
VALUES (4, 'Question 4', 'This is the fourth question', 2)
ON CONFLICT DO NOTHING;

INSERT INTO responses (id, text, correct, question_id) 
VALUES (1, 'Yes', true, 1)
ON CONFLICT DO NOTHING;
INSERT INTO responses (id, text, correct, question_id) 
VALUES (2, 'No', false, 1)
ON CONFLICT DO NOTHING;
INSERT INTO responses (id, text, correct, question_id) 
VALUES (3, 'Yes', true, 2)
ON CONFLICT DO NOTHING;
INSERT INTO responses (id, text, correct, question_id) 
VALUES (4, 'No', false, 2)
ON CONFLICT DO NOTHING;
INSERT INTO responses (id, text, correct, question_id) 
VALUES (5, 'Yes', true, 3)
ON CONFLICT DO NOTHING;
INSERT INTO responses (id, text, correct, question_id) 
VALUES (6, 'No', false, 3)
ON CONFLICT DO NOTHING;
INSERT INTO responses (id, text, correct, question_id) 
VALUES (7, 'Yes', true, 4)
ON CONFLICT DO NOTHING;
INSERT INTO responses (id, text, correct, question_id) 
VALUES (8, 'No', false, 4)
ON CONFLICT DO NOTHING;