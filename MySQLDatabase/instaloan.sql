-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 23, 2020 at 04:56 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `instaloan`
--

-- --------------------------------------------------------

--
-- Table structure for table `alert`
--

CREATE TABLE `alert` (
  `alertid` int(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `readflag` varchar(40) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `message` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alert`
--

INSERT INTO `alert` (`alertid`, `email`, `readflag`, `date`, `message`) VALUES
(1, 'sathishkumar.g989@gmail.com', 'Y', '2020-07-19 22:35:17', 'Sathish Registered Personal loan on 100000 rs amount Mobile no is 9003274341 and email id is sathishkumar.g1989@gmail.com'),
(9, 'revathi.d1988@gmail.com', 'N', '2020-07-20 00:31:37', 'Revathi Registered Personal loan on 100000 rs amount Mobile no is 9003274341 and email id is revathi.d1988@gmail.com'),
(13, 'saravanan.m1986@gmail.com', 'N', '2020-07-25 18:33:09', 'Saravanan Registered Personal loan on 100000 rs amount Mobile no is 9003274341 and email id is saravanan.d1988@gmail.com'),
(14, 'revathi.d1989@gmail.com', 'N', '2020-08-09 17:23:41', 'Revathi Registered Personal loan on 100000 rs amount Mobile no is 9003274341 and email id is revathi.d1988@gmail.com'),
(21, 'aa@bb.com', 'N', '2020-08-09 18:12:39', 'Test Registered Personal loan on 100000 rs amount Mobile no is 9003274341 and email id is aa.d1988@gmail.com'),
(22, 'gowtham90@gmail.com', 'N', '2020-08-09 19:36:38', 'Gowtham Registered with emaild id is gowtham90@gmail.com on Sun Aug 09 2020 19:36:38 '),
(25, 'sathish@gmail.com', 'N', '2020-08-09 20:29:17', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Sun Aug 09 2020 20:09:17 '),
(27, 'sathish@gmail.com', 'N', '2020-08-09 20:36:24', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Sun Aug 09 2020 20:36:24 '),
(29, 'sathish@gmail.com', 'N', '2020-08-09 20:36:27', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Sun Aug 09 2020 20:36:27 '),
(30, 'sathish@gmail.com', 'N', '2020-08-13 14:14:49', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Thu Aug 13 2020 14:14:49 '),
(62, 'aa@ee.com', 'N', '2020-08-23 16:21:31', 'reva Registered personalLoan on 60000 rs amount Mobile no is 8807805654 and email id is aa@ee.com on Sun Aug 23 2020 16:21:31 '),
(63, 'dd@ee.com', 'N', '2020-08-23 16:27:40', 'testing Registered HomeLoan on 567899 rs amount Mobile no is 78976576 and email id is dd@ee.com on Sun Aug 23 2020 16:27:40 '),
(64, 'harian@gmail.com', 'N', '2020-08-23 20:16:11', 'Harian Registered with emaild id is harian@gmail.com on Sun Aug 23 2020 20:16:11 '),
(65, 'undefined', 'N', '2020-08-23 20:18:31', 'undefined Registered HomeLoan on undefined rs amount Mobile no is undefined and email id is undefined on Sun Aug 23 2020 20:18:31 '),
(66, 'ee@gg.com', 'N', '2020-08-23 20:22:29', 'devadoss Registered HomeLoan on 500000 rs amount Mobile no is 8896795456 and email id is ee@gg.com on Sun Aug 23 2020 20:22:29 ');

-- --------------------------------------------------------

--
-- Table structure for table `instantUser`
--

CREATE TABLE `instantUser` (
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `panNo` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `loanAmt` varchar(100) NOT NULL,
  `typeOfLoan` varchar(100) NOT NULL,
  `annualIncome` varchar(100) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `salaryrecivedBank` varchar(100) DEFAULT NULL,
  `empType` varchar(100) DEFAULT NULL,
  `vechileType` varchar(100) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `instantUser`
--

INSERT INTO `instantUser` (`name`, `email`, `panNo`, `mobile`, `loanAmt`, `typeOfLoan`, `annualIncome`, `city`, `salaryrecivedBank`, `empType`, `vechileType`, `date`) VALUES
('revathi', 'reva@gmail.com', '6789978', '1234567890', '567890', 'Personal Loan', '500000', 'chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-23 09:22:19'),
('reva', 'reva@gmail.com', '57765765', '1234567890', '567890', 'Personal Loan', '500000', 'chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-23 09:25:20'),
('reva', 'rev@', '65475476', '1234567890', '56787', 'Personal Loan', '500000', 'chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-23 09:26:55'),
('undefined', 'rvea', '8768789', '1234567890', '67800', 'Personal Loan', '500000', 'chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-23 09:28:09'),
('reva', 'reva', '5465775', '1234567890', '678787', 'Personal Loan', '500000', 'chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-23 09:30:43'),
('reva', 'reva@g.com', '644756', '7567578', '67890', 'HomeLoan', '678000', 'chennai', 'NULL', 'Self Employed Professional', 'NULL', '2020-08-23 13:55:05'),
('cartest', 'aa@bb.com', '5657657', '889787899', '500000', 'CarLoan', '450000', 'chennai', 'NULL', 'Self Employed Business', 'undefined', '2020-08-23 14:01:37'),
('revathi', 'reva@gmail.com', '67675786', '56878665', '13000', 'HomeLoan', '56000', 'chennai', 'NULL', 'Self Employed Business', 'NULL', '2020-08-23 14:58:47'),
('revathi', 'reva@gmail.com', '67675786', '56878665', '13000', 'HomeLoan', '56000', 'chennai', 'NULL', 'Self Employed Business', 'NULL', '2020-08-23 14:59:02'),
('reva', 'cc@dd.com', '67576578', '8807804678', '4500', 'personalLoan', '56778', 'chennai', 'sbi', 'Self Employed Business', 'NULL', '2020-08-23 16:05:44'),
('reva', 'cc@dd.com', '67576578', '8807804678', '4500', 'personalLoan', '56778', 'chennai', 'sbi', 'Self Employed Business', 'NULL', '2020-08-23 16:06:37'),
('reva', 'cc@dd.com', '67576578', '8807804678', '4500', 'personalLoan', '56778', 'chennai', 'sbi', 'Self Employed Business', 'NULL', '2020-08-23 16:06:56'),
('reva', 'cc@dd.com', '67576578', '8807804678', '4500', 'personalLoan', '56778', 'chennai', 'sbi', 'Self Employed Business', 'NULL', '2020-08-23 16:09:05'),
('reva', 'cc@dd.com', '67576578', '8807804678', '4500', 'personalLoan', '56778', 'chennai', 'sbi', 'Self Employed Business', 'NULL', '2020-08-23 16:10:44'),
('reva', 'aa@ee.com', '754gfhg66', '8807805654', '60000', 'personalLoan', '56900', 'chennai', 'sbi', 'Self Employed Professional', 'NULL', '2020-08-23 16:21:31'),
('testing', 'dd@ee.com', '657657', '78976576', '567899', 'HomeLoan', '7667576', 'chennai', 'NULL', 'Salaried', 'NULL', '2020-08-23 16:27:40'),
('undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'HomeLoan', 'undefined', 'undefined', 'NULL', 'empType', 'NULL', '2020-08-23 20:18:31'),
('devadoss', 'ee@gg.com', '75748999755', '8896795456', '500000', 'HomeLoan', '750000', 'test', 'NULL', 'Self Employed Business', 'NULL', '2020-08-23 20:22:29');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `firstName` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `phonenumber` varchar(40) NOT NULL,
  `accountnumber` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `pancard` varchar(40) DEFAULT NULL,
  `admin` varchar(10) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`firstName`, `email`, `phonenumber`, `accountnumber`, `password`, `pancard`, `admin`, `date`) VALUES
('shy', 'aa@bb.com', '6536723589', '87872376', '1234567', 'bch85445', 'N', '2020-08-09 18:12:39'),
('Gowtham', 'gowtham90@gmail.com', '3434344344', '4354546565', 'gowtham@90', 'sfsfsff', 'N', '2020-08-09 19:36:38'),
('Harian', 'harian@gmail.com', '9962137148', '6436473343', 'Harian@20', '', 'N', '2020-08-23 20:16:11'),
('sss', 'reva.shailaja@gmail.com', '3434', 'ww', '123456', 'df', 'N', '2020-08-14 11:38:04'),
('revathi', 'revathi.d1988@gmail.com', '9003273435', '1234567890', 'revathi@1988', 'DY4356656', 'N', '2020-07-20 00:31:37'),
('revathi', 'revathi.d1989@gmail.com', '9003273435', '1234567890', 'revathi@1988', 'DY4356656', 'N', '2020-08-09 17:23:41'),
('saravanan', 'saravanan.m1986@gmail.com', '9003273435', '1234567890', 'saravanan@1986', 'DY4356656', 'N', '2020-08-04 09:41:16'),
('sathishkumar', 'sathishkumar.g1989@gmail.com', '9003274341', '1234567890', 'sathish@1989', NULL, 'Y', '2020-07-19 22:19:21'),
('shailajadevadoss', 'shyludev@gmail.com', '786790823', '6792637', '12345678', 'mjj89ksh', 'N', '2020-08-14 11:49:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alert`
--
ALTER TABLE `alert`
  ADD UNIQUE KEY `1` (`alertid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alert`
--
ALTER TABLE `alert`
  MODIFY `alertid` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
