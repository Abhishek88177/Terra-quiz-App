package com.terraquiz.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.terraquiz.model.Question;
import com.terraquiz.service.QuestionService;

@CrossOrigin
@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable("id") Integer id) {
        Question question = questionService.getQuestionById(id);
        if (question == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(question);
    }
    
    @GetMapping("/skill/{skill}")
    public ResponseEntity<List<Question>> getQuestionById(@PathVariable("skill") String skill) {
    	List<Question> question = questionService.getQuestionBySkill(skill);
    	if (question == null) {
    		return ResponseEntity.notFound().build();
    	}
    	return ResponseEntity.ok(question);
    }

    @PostMapping
    public ResponseEntity<Question> createQuestion(@RequestBody Question question) {
        Question createdQuestion = questionService.createQuestion(question);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdQuestion);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Question> updateQuestion(@PathVariable("id") Integer id, @RequestBody Question question) {
        Question updatedQuestion = questionService.updateQuestion(id, question);
        if (updatedQuestion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedQuestion);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable("id") Integer id) {
        boolean deleted = questionService.deleteQuestion(id);
        if (!deleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
    
    
    @GetMapping("/correctoption/{id}")
    public String getCorrectOption(@PathVariable("id") Integer id) {
    	
    	return questionService.getCorrectAnswer(id);
    }
}
