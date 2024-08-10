package com.terraquiz.service;

import java.util.List;

import com.terraquiz.model.Question;

public interface QuestionService {
	public List<Question> getAllQuestions();
	public Question getQuestionById(Integer id);
	public Question createQuestion(Question question);
	public Question updateQuestion(Integer id, Question question);
	public boolean deleteQuestion(Integer id);
	public String getCorrectAnswer(Integer id);
	
	
//	public String viewQuestion(Question question);
//	public List<String> optionsList(Question question);
//	public boolean correctAnswer(Question question);
	List<Question> getQuestionBySkill(String skill);
}
