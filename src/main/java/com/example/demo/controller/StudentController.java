package com.example.demo.controller;

import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/student")
@RestController
public class StudentController {
    private StudentService studentService;


    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // handler methods

    /**
     * Listing all students
     */
    @GetMapping("/all")
    public List<Student> listStudents() {
        return studentService.getAllStudents();
    }

    /**
     * Getting student by ID.
     */
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    /**
     * Adding a student
     */
    @PostMapping("/add")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }
}
