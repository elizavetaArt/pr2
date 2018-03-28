CREATE SCHEMA `my_port` ;

USE `my_port`;

CREATE TABLE `my_port`.`user_order` (
  `id` INT NOT NULL,
  `date` VARCHAR(80) NULL,
  `time` VARCHAR(80) NULL,
  `status` VARCHAR(80) NULL,
  `form_sevices` VARCHAR(80) NULL,
  `vid_auto` VARCHAR(80) NULL,
  `number` VARCHAR(80) NULL,
  `name` VARCHAR(80) NULL,
  `form_comments` VARCHAR(80) NULL,
  PRIMARY KEY (`id`));
