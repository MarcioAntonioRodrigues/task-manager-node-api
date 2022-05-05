CREATE TABLE task
(
    taskId AUTOINCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    timeCourse VARCHAR (30) NOT NULL,
    priority VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    description VARCHAR(255) NULL,
    deliveryDate DATETIME NULL,
    PRIMARY KEY (taskId)
);
