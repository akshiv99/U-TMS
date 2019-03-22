--
-- Database: 'testing'
--

-- --------------------------------------------------------

--
--

DROP TABLE IF EXISTS `TMS`;
CREATE TABLE `TMS` (
  `SUBJECT_CODE` varchar(10) NOT NULL,
    `COURSE_NUMBER` int(10) DEFAULT NULL,
    `TYPE` varchar(10) NOT NULL,
    `METHOD` varchar(10) NOT NULL,
    `SECTION` varchar(10) NOT NULL,
    `CRN` int (10) NOT NULL,
    `COURSE_TITLE` varchar(244) DEFAULT NULL,
    `DAYS` varchar(10) NOT NULL,
    `TIME_FROM` int(10) NOT NULL,
    `TIME_TO` int(10) NOT NULL,
    `INSTRUCTOR` varchar(50) NOT NULL
);

-- --------------------------------------------------------

--
-- Dumping data for table `TMS`
--

LOCK TABLES `TMS` WRITE;
INSERT INTO `TMS` VALUES
    ('CS',150,'Lecture','FTF','062',10101,'Computer Science Principles','Thursday',1300,1430,'Jeffry L Popyack'),
    ('CS',150,'Lecture','FTF','063',10102,'Computer Science Principles','Friday',1500,1630,'Jeffry L Popyack'),
    ('CS',150,'Lecture','FTF','A',10103,'Computer Science Principles','Tuesday',1000,1100,'Jeffry L Popyack'),
    ('CS',164,'Lecture','FTF','060',10104,'Introduction to Computer Science','Thursday',1300,1430,'Brian Stuart'),
    ('CS',164,'Lecture','FTF','061',10105,'Introduction to Computer Science','Thursday',1500,1630,'Brian Stuart'),
    ('CS',164,'Lecture','FTF','A',10106,'Introduction to Computer Science','Monday',1100,1200,'Brian Stuart'),
    ('CS',164,'Lecture','FTF','b',10107,'Introduction to Computer Science','Monday',1400,1400,'Brian Stuart'),
    ('CS',164,'Lecture','FTF','A',10108,'Introduction to Computer Science','Wednesday',1100,1300,'Brian Stuart'), 
    ('CS',171,'Lecture','FTF',61,10109,'Computer Programming I','Tuesday',1000,1100,'David H Augenblick'),
    ('CS',171,'Lecture','FTF',61,10110,'Computer Programming I','Tuesday',1000,1100,'David H Augenblick'),
    ('CS',171,'Lecture','FTF',61,10111,'Computer Programming I','Tuesday',1000,1100,'Kurt Schmidt'),
    ('CS',171,'Lecture','FTF',61,10112,'Computer Programming I','Monday',900,1000,'Mark W Boady'),
    ('CS',171,'Lecture','FTF',61,10113,'Computer Programming I','Tuesday',1000,1100,'Matthew J Burlick'),
    ('CS',171,'Lecture','FTF',61,10114,'Computer Programming I','Monday',900,1000,'David H Augenblick'),
    ('CS',171,'Lecture','FTF',61,10115,'Computer Programming I','Friday',1300,1400,'Kurt Schmidt'),
    ('CS',172,'Lecture','FTF',61,10116,'Computer Programming II','Thursday',1200,1300,'Kurt Schmidt'),
    ('CS',172,'Lecture','FTF',61,10117,'Computer Programming II','Thursday',1200,1300,'Mark W Boady'),
    ('CS',172,'Lecture','FTF',61,10118,'Computer Programming II','Tuesday',1000,1100,'Kurt Schmidt'),
    ('CS',172,'Lecture','FTF',61,10119,'Computer Programming II','Wednesday',1100,1200,'Matthew J Burlick'),
    ('CS',172,'Lecture','FTF',61,10120,'Computer Programming II','Tuesday',1000,1100,'David H Augenblick'),
    ('CS',172,'Lecture','FTF',61,10121,'Computer Programming II','Tuesday',1000,1100,'Matthew J Burlick'),
    ('CS',172,'Lecture','FTF',61,10122,'Computer Programming II','Monday',900,1000,'Mark W Boady'),
    ('CS',172,'Lecture','FTF',61,10123,'Computer Programming II','Friday',1300,1400,'Kurt Schmidt'),
    ('CS',260,'Lecture','FTF',61,10171,'Advanced Computer Programming','Friday',1100,1400,'Kurt Schmidt'),
    ('CS',260,'Lecture','FTF',61,10172,'Advanced Computer Programming','Tuesday',1800,2100,'Kurt Schmidt'),
    ('MATH',122,'Lecture','FTF',61,10124,'Calculus II','Wednesday',1100,1200,'Richard D White'),
    ('MATH',122,'Lecture','FTF',61,10125,'Calculus II','Monday',900,1000,'Jeanne M Steuber'),
    ('MATH',122,'Lecture','FTF',61,10126,'Calculus II','Tuesday',900,1000,'Jeanne M Steuber'),
    ('MATH',122,'Lecture','FTF',61,10127,'Calculus II','Monday',1200,1400,'Matthew J Ziemke'),
    ('MATH',122,'Lecture','FTF',61,10128,'Calculus II','Thursday',1200,1400,'Jeanne M Steuber'),
    ('MATH',122,'Lecture','FTF',61,10129,'Calculus II','Monday',1500,1700,'Jeanne M Steuber');
    
    
UNLOCK TABLES;
