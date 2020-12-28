function initialize() {
    let streams = [
        {
            "id": 1,
            "stream": "Java"
        },
        {
            "id": 2,
            "stream": "C#"
        }
    ];
    setStreams(streams);


    let types = [
        {
            "id": 1,
            "type": "Full time"
        },
        {
            "id": 2,
            "type": "Part time"
        }
    ];
    setTypes(types);


    let subjects = [
        {
            "id": 1,
            "subject": "Java"
        },
        {
            "id": 2,
            "subject": "MySql"
        },
        {
            "id": 3,
            "subject": "HTML"
        },
        {
            "id": 4,
            "subject": "CSS"
        }
    ];
    setSubjects(subjects);


    let courses = [
        {
            "id": 1,
            "title": "cb12",
            "stream": 1,
            "type": 1,
            "sdate": new Date('2020-01-01'),
            "edate": new Date('2020-03-01')
        },
        {
            "id": 2,
            "title": "cb12",
            "stream": 1,
            "type": 2,
            "sdate": new Date('2020-01-01'),
            "edate": new Date('2020-06-01')
        },
        {
            "id": 3,
            "title": "cb13",
            "stream": 2,
            "type": 1,
            "sdate": new Date('2020-06-09'),
            "edate": new Date('2020-09-09')
        },
        {
            "id": 4,
            "title": "cb13",
            "stream": 2,
            "type": 2,
            "sdate": new Date('2020-06-09'),
            "edate": new Date('2020-12-01')
        }
    ];
    setCourses(courses);


    let students = [
        {
            "id": 1,
            "fname": "s1_fname",
            "lname": "s1_lname",
            "dob": new Date('2000-01-01'),
            "fees": 2000
        },
        {
            "id": 2,
            "fname": "s2_fname",
            "lname": "s2_lname",
            "dob": new Date('2001-01-02'),
            "fees": 3000
        },
        {
            "id": 3,
            "fname": "s3_fname",
            "lname": "s3_lname",
            "dob": new Date('2003-01-03'),
            "fees": 4000
        },
        {
            "id": 4,
            "fname": "s4_fname",
            "lname": "s4_lname",
            "dob": new Date('2004-01-04'),
            "fees": 5000
        }
    ];
    setStudents(students);


    let trainers = [
        {
            "id": 1,
            "fname": "t1_fname",
            "lname": "t1_lname",
            "subject": 1
        },
        {
            "id": 2,
            "fname": "t2_fname",
            "lname": "t2_lname",
            "subject": 2
        },
        {
            "id": 3,
            "fname": "t3_fname",
            "lname": "t3_lname",
            "subject": 3
        },
        {
            "id": 4,
            "fname": "t4_fname",
            "lname": "t4_lname",
            "subject": 4
        }
    ];
    setTrainers(trainers);


    let briefings = [
        {
            "id": 1,
            "title": "briefing 1",
            "maxoral": 50,
            "maxtotal": 100,
            "ddate": new Date('2020-01-01'),
            "course": 1,
            "isproject": false,
            "description": "fou"
        },
        {
            "id": 2,
            "title": "briefing 2",
            "maxoral": 50,
            "maxtotal": 100,
            "ddate": new Date('2020-02-01'),
            "course": 1,
            "isproject": false,
            "description": "fou fou"
        },
        {
            "id": 3,
            "title": "briefing 3",
            "maxoral": 50,
            "maxtotal": 100,
            "ddate": new Date('2020-03-01'),
            "course": 2,
            "isproject": true,
            "description": "fou fou fou"
        },
        {
            "id": 4,
            "title": "briefing 4",
            "maxoral": 50,
            "maxtotal": 100,
            "ddate": new Date('2020-04-01'),
            "course": 3,
            "isproject": true,
            "description": "fou fou fou fou"
        }
    ];
    setBriefings(briefings);


    let submissions = [
        {
            "id": 1,
            "maxoral": 40,
            "maxtotal": 80,
            "sdate": new Date('2020-01-01'),
            "briefing": 1
        },
        {
            "id": 2,
            "maxoral": 41,
            "maxtotal": 81,
            "sdate": new Date('2020-01-02'),
            "briefing": 2
        },
        {
            "id": 3,
            "maxoral": 42,
            "maxtotal": 82,
            "sdate": new Date('2020-01-03'),
            "briefing": 3
        },
        {
            "id": 4,
            "maxoral": 43,
            "maxtotal": 83,
            "sdate": new Date('2020-01-04'),
            "briefing": 4
        }
    ];
    setSubmissions(submissions);

}
