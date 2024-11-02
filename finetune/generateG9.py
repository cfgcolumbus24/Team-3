import random
import json

# Define Grade 9-specific data for each part of the lesson plan
quick_practice_examples = {
    "Linear Functions and Graphing": [
        "Graph linear functions and analyze slope-intercept form (e.g., y = mx + b)",
        "Identify x- and y-intercepts of a line",
        "Interpret linear graphs in real-world contexts"
    ],
    "Quadratic Equations": [
        "Solve quadratic equations by factoring",
        "Graph quadratic equations and analyze vertex and axis of symmetry",
        "Use the quadratic formula to find roots of equations"
    ],
    "Geometry: Transformations and Coordinate Geometry": [
        "Perform rotations, reflections, and translations on a coordinate plane",
        "Calculate distances and midpoints between points",
        "Use the Pythagorean Theorem in coordinate geometry"
    ],
    "Probability and Statistics": [
        "Calculate probabilities of independent and dependent events",
        "Analyze data using box-and-whisker plots",
        "Interpret standard deviation and data spread"
    ],
    "The Real Number System": [
        "Classify numbers as rational, irrational, integers, or real numbers",
        "Perform operations with real numbers",
        "Approximate square roots of non-perfect squares"
    ]
}

activities = {
    "Linear Functions and Graphing": [
        "Graph linear functions using slope and intercepts",
        "Solve real-world problems involving linear functions",
        "Use a graphing calculator to explore changes in slope and intercept"
    ],
    "Quadratic Equations": [
        "Solve quadratic equations by factoring and using the quadratic formula",
        "Graph quadratic functions and identify key features",
        "Group activity: Find real-life applications of quadratic equations"
    ],
    "Geometry: Transformations and Coordinate Geometry": [
        "Draw and perform transformations on grid paper",
        "Solve problems involving distances and midpoints",
        "Explore coordinate geometry with hands-on activities"
    ],
    "Probability and Statistics": [
        "Conduct experiments to explore probability concepts",
        "Analyze data from class surveys with box plots",
        "Work with a partner to calculate probabilities of compound events"
    ],
    "The Real Number System": [
        "Classify and compare different types of numbers",
        "Solve real-world problems involving irrational numbers",
        "Estimate square roots on a number line"
    ]
}

essential_questions = {
    "Linear Functions and Graphing": [
        "How are linear functions used to model real-life situations?",
        "What does the slope of a line represent?"
    ],
    "Quadratic Equations": [
        "How can quadratic equations model real-world scenarios?",
        "Why is the quadratic formula important in finding solutions?"
    ],
    "Geometry: Transformations and Coordinate Geometry": [
        "How do transformations change shapes on the coordinate plane?",
        "What is the importance of distance and midpoint in geometry?"
    ],
    "Probability and Statistics": [
        "How do we use probability to predict outcomes?",
        "What can data tell us about trends and variations?"
    ],
    "The Real Number System": [
        "What makes a number rational or irrational?",
        "How do real numbers apply to real-world problems?"
    ]
}

assessments = {
    "Linear Functions and Graphing": [
        "Quiz on graphing linear functions and interpreting slope",
        "Solve real-world problems involving linear functions"
    ],
    "Quadratic Equations": [
        "Quiz on solving quadratic equations by factoring",
        "Use the quadratic formula to solve problems"
    ],
    "Geometry: Transformations and Coordinate Geometry": [
        "Identify transformations and calculate distances between points",
        "Quiz on using the Pythagorean Theorem in coordinate geometry"
    ],
    "Probability and Statistics": [
        "Calculate probabilities and interpret data distributions",
        "Analyze box plots and calculate measures of spread"
    ],
    "The Real Number System": [
        "Quiz on classifying numbers and estimating square roots",
        "Solve real-world problems using real numbers"
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
topics = ["Linear Functions and Graphing", "Quadratic Equations", "Geometry: Transformations and Coordinate Geometry", "Probability and Statistics", "The Real Number System"]
unique_lesson_plans = set()

# Set the number of variations per topic
num_variations = 3
json_data = []

# Generate structured message data for each topic with multiple variations
for topic in topics:
    count = 0
    while count < num_variations:
        prompt = f"Generate a lesson plan for Grade 9, Math, {topic}"
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
