import random
import json

# Define Grade 8-specific data for each part of the lesson plan
quick_practice_examples = {
    "Linear Equations and Functions": [
        "Solve linear equations with one variable (e.g., 3x + 5 = 20)",
        "Graph linear equations and analyze the slope",
        "Interpret slope and intercepts in real-world problems"
    ],
    "Systems of Equations": [
        "Solve systems of equations by substitution",
        "Use elimination to solve systems of equations",
        "Interpret solutions of systems in real-world contexts"
    ],
    "Geometry: Transformations and Similarity": [
        "Perform translations, rotations, and reflections on a coordinate plane",
        "Identify similar shapes and use proportions to find missing lengths",
        "Analyze transformations and their effects on figures"
    ],
    "Statistics and Probability": [
        "Analyze bivariate data using scatter plots",
        "Interpret patterns and trends in data",
        "Calculate probabilities of compound events"
    ],
    "The Number System: Exponents and Roots": [
        "Simplify expressions with integer exponents",
        "Estimate and compute square roots and cube roots",
        "Apply the laws of exponents in expressions"
    ]
}

activities = {
    "Linear Equations and Functions": [
        "Graph linear equations and identify slope and intercepts",
        "Solve word problems involving linear equations",
        "Use a graphing calculator or software to explore linear functions"
    ],
    "Systems of Equations": [
        "Solve systems of equations with a partner using elimination",
        "Create and solve real-life problems modeled by systems of equations",
        "Graph systems and discuss solutions in groups"
    ],
    "Geometry: Transformations and Similarity": [
        "Perform transformations on grid paper",
        "Compare and contrast similar shapes in pairs",
        "Use mirrors to visualize reflections"
    ],
    "Statistics and Probability": [
        "Create and interpret scatter plots from data sets",
        "Work with a partner to calculate probabilities of compound events",
        "Analyze random samples to predict outcomes"
    ],
    "The Number System: Exponents and Roots": [
        "Practice simplifying expressions with exponents",
        "Estimate square roots with a number line",
        "Group activity: Solve problems involving exponents and roots"
    ]
}

essential_questions = {
    "Linear Equations and Functions": [
        "How are linear equations used to model real-world situations?",
        "What do the slope and intercept represent in a graph?"
    ],
    "Systems of Equations": [
        "What does it mean to solve a system of equations?",
        "How can systems of equations help us solve real-life problems?"
    ],
    "Geometry: Transformations and Similarity": [
        "How do transformations change the position and size of shapes?",
        "Why are similar shapes important in real-world applications?"
    ],
    "Statistics and Probability": [
        "How can data help us make predictions?",
        "What are the chances of an event happening in compound scenarios?"
    ],
    "The Number System: Exponents and Roots": [
        "How are exponents and roots useful in solving problems?",
        "What patterns can we see in exponential expressions?"
    ]
}

assessments = {
    "Linear Equations and Functions": [
        "Quiz on graphing linear equations and identifying slope",
        "Solve real-life problems using linear equations"
    ],
    "Systems of Equations": [
        "Quiz on solving systems by substitution and elimination",
        "Interpret solutions of systems in context"
    ],
    "Geometry: Transformations and Similarity": [
        "Identify transformations and their effects on shapes",
        "Quiz on finding missing lengths in similar shapes"
    ],
    "Statistics and Probability": [
        "Analyze scatter plots and interpret data trends",
        "Calculate probabilities for compound events in a quiz"
    ],
    "The Number System: Exponents and Roots": [
        "Quiz on simplifying expressions with exponents",
        "Solve real-world problems involving roots and exponents"
    ]
}

# Function to generate a lesson plan in text format for the assistant message
def generate_lesson_plan_text(topic):
    quick_practice = random.choice(quick_practice_examples.get(topic, ["Review basic concepts"]))
    shuffled_activities = random.sample(activities.get(topic, ["Activity 1", "Activity 2", "Activity 3"]), k=3)
    shuffled_essential_questions = random.sample(essential_questions.get(topic, ["What is this concept?", "How can we apply this concept?"]), k=2)
    shuffled_assessments = random.sample(assessments.get(topic, ["Quiz on topic basics", "Create a problem related to topic"]), k=2)

    lesson_plan_text = f"""
    Quick practice (questions level below the given subject):
    - {quick_practice}

    Daily routine:
        Activity 1: {shuffled_activities[0]}
        Activity 2: {shuffled_activities[1]}
        Activity 3: {shuffled_activities[2]}

    Essential questions:
        1. {shuffled_essential_questions[0]}
        2. {shuffled_essential_questions[1]}

    Assessments:
        1. {shuffled_assessments[0]}
        2. {shuffled_assessments[1]}
    """
    return lesson_plan_text.strip()

# Define topics and initialize a set to store unique generated content
topics = ["Linear Equations and Functions", "Systems of Equations", "Geometry: Transformations and Similarity", "Statistics and Probability", "The Number System: Exponents and Roots"]
unique_lesson_plans = set()

# Set the number of variations per topic
num_variations = 3
json_data = []

# Generate structured message data for each topic with multiple variations
for topic in topics:
    count = 0
    while count < num_variations:
        prompt = f"Generate a lesson plan for Grade 8, Math, {topic}"
        completion_text = generate_lesson_plan_text(topic)
        
        # Ensure uniqueness by checking if the completion_text already exists in the set
        if completion_text not in unique_lesson_plans:
            unique_lesson_plans.add(completion_text)
            json_data.append({
                "messages": [
                    {"role": "system", "content": "You are an educational assistant that creates structured lesson plans for specific topics, grade levels, and subjects."},
                    {"role": "user", "content": prompt},
                    {"role": "assistant", "content": completion_text}
                ]
            })
            count += 1

# Write to JSONL file
with open("lesson_plans.jsonl", "a") as f:
    for entry in json_data:
        f.write(json.dumps(entry) + "\n")
