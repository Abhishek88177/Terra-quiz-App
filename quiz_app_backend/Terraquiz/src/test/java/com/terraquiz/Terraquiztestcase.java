package com.terraquiz;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;

import com.terraquiz.model.Question;
import com.terraquiz.repository.QuestionRepository;
import com.terraquiz.service.QuestionServiceImpl;

public class Terraquiztestcase {

    private QuestionServiceImpl questionService;
    private QuestionRepository questionRepository;


    @Test
    public void testGetCorrectAnswer() {
        // Given
        Integer questionId = 1;
        Question question = new Question();
        question.setId(questionId);
        question.setCorrectOption("A");
        
        // Mock behavior of questionRepository
        when(questionRepository.findById(questionId)).thenReturn(Optional.of(question));

        // When
        String correctAnswer = questionService.getCorrectAnswer(questionId);

        // Then
        assertEquals("A", correctAnswer);
    }
}