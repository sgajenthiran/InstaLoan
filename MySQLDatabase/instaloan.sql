-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 16, 2020 at 05:55 PM
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
(26, 'sathish@gmail.com', 'N', '2020-08-09 20:36:05', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Sun Aug 09 2020 20:36:05 '),
(27, 'sathish@gmail.com', 'N', '2020-08-09 20:36:24', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Sun Aug 09 2020 20:36:24 '),
(28, 'sathish@gmail.com', 'N', '2020-08-09 20:36:26', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Sun Aug 09 2020 20:36:26 '),
(29, 'sathish@gmail.com', 'N', '2020-08-09 20:36:27', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Sun Aug 09 2020 20:36:27 '),
(30, 'sathish@gmail.com', 'N', '2020-08-13 14:14:49', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Thu Aug 13 2020 14:14:49 '),
(31, 'reva.shailaja@gmail.com', 'N', '2020-08-14 11:38:04', 'sss Registered with emaild id is reva.shailaja@gmail.com on Fri Aug 14 2020 11:38:04 '),
(32, 'shyludev@gmail.com', 'N', '2020-08-14 11:49:17', 'shailajadevadoss Registered with emaild id is shyludev@gmail.com on Fri Aug 14 2020 11:49:17 '),
(33, 'sathish@gmail.com', 'N', '2020-08-16 21:16:32', 'sathish Kumar Registered Personal Loan on 100000 rs amount Mobile no is 1234567890 and email id is sathish@gmail.com on Sun Aug 16 2020 21:16:32 ');

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
  `annualIncome` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `salaryrecivedBank` varchar(100) NOT NULL,
  `empType` varchar(100) DEFAULT NULL,
  `vechileType` varchar(100) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `instantUser`
--

INSERT INTO `instantUser` (`name`, `email`, `panNo`, `mobile`, `loanAmt`, `typeOfLoan`, `annualIncome`, `city`, `salaryrecivedBank`, `empType`, `vechileType`, `date`) VALUES
('sathish Kumar', 'sathish@gmail.com', 'ABCDS7687A', '1234567890', '100000', 'Personal Loan', '500000', 'Chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-09 20:24:44'),
('sathish Kumar', 'sathish@gmail.com', 'ABCDS7687A', '1234567890', '100000', 'Personal Loan', '500000', 'Chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-09 20:29:17'),
('sathish Kumar', 'sathish@gmail.com', 'ABCDS7687A', '1234567890', '100000', 'Personal Loan', '500000', 'Chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-09 20:36:05'),
('sathish Kumar', 'sathish@gmail.com', 'ABCDS7687A', '1234567890', '100000', 'Personal Loan', '500000', 'Chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-09 20:36:24'),
('sathish Kumar', 'sathish@gmail.com', 'ABCDS7687A', '1234567890', '100000', 'Personal Loan', '500000', 'Chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-09 20:36:26'),
('sathish Kumar', 'sathish@gmail.com', 'ABCDS7687A', '1234567890', '100000', 'Personal Loan', '500000', 'Chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-09 20:36:27'),
('sathish Kumar', 'sathish@gmail.com', 'ABCDS7687A', '1234567890', '100000', 'Personal Loan', '500000', 'Chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-13 14:14:49'),
('sathish Kumar', 'sathish@gmail.com', 'ABCDS7687A', '1234567890', '100000', 'Personal Loan', '500000', 'Chennai', 'SBI', 'Salary', 'Two wheeler', '2020-08-16 21:16:32');

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
  MODIFY `alertid` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
