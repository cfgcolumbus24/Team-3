import random
import json

# Define Grade 7-specific data for each part of the lesson plan
quick_practice_examples = {
    "Proportional Relationships and Percentages": [
        "Calculate percentages in real-life scenarios (e.g., discounts, tax)",
        "Identify proportional relationships in tables and graphs",
        "Solve problems involving scale drawings"
    ],
    "Solving Multi-Step Equations and Inequalities": [
        "Solve multi-step equations with variables on both sides",
        "Use inequalities to represent real-world situations",
        "Graph inequalities on a number line"
    ],
    "Geometry: Circles and Area": [
        "Calculate the area and circumference of circles",
        "Identify and label parts of a circle (radius, diameter, circumference)",
        "Solve real-world problems involving circles"
    ],
    "Statistics: Probability and Sampling": [
        "Calculate probabilities of single and compound events",
        "Analyze data from random samples",
        "Use probability to make predictions"
    ],
    "Rational Numbers and Integer Operations": [
        "Add, subtract, multiply, and divide rational numbers",
        "Solve real-world problems involving integers",
        "Use absolute value in practical contexts"
    ]
}

activities = {
    "Proportional Relationships and Percentages": [
        "Practice calculating percentages in various scenarios",
        "Create scale drawings to understand proportions",
        "Graph proportional relationships and analyze the slope"
    ],
    "Solving Multi-Step Equations and Inequalities": [
        "Use balance models to solve multi-step equations",
        "Graph inequalities on a number line with a partner",
        "Write and solve real-life problems with equations and inequalities"
    ],
    "Geometry: Circles and Area": [
        "Measure circular objects and calculate circumference and area",
        "Group activity: Identify circle parts and solve problems",
        "Use compasses to draw circles and measure parts"
    ],
    "Statistics: Probability and Sampling": [
        "Conduct probability experiments using coins and dice",
        "Analyze random samples to predict outcomes",
        "Create probability trees for compound events"
    ],
    "Rational Numbers and Integer Operations": [
        "Use number lines to visualize rational number operations",
        "Solve real-life integer problems in pairs",
        "Group activity: Compare and order rational numbers"
    ]
}

essential_questions = {
    "Proportional Relationships and Percentages": [
        "How are proportions used in real life?",
        "Why is it useful to understand percentages and proportional relationships?"
    ],
    "Solving Multi-Step Equations and Inequalities": [
        "How can equations and inequalities help us solve problems?",
        "What do inequalities represent in real-world scenarios?"
    ],
    "Geometry: Circles and Area": [
        "How are circles measured and why is this useful?",
        "Why is understanding the parts of a circle important?"
    ],
    "Statistics: Probability and Sampling": [
        "How can probability help us make decisions?",
        "Why is understanding samples important in analyzing data?"
    ],
    "Rational Numbers and Integer Operations": [
        "How do operations with rational numbers apply to real-life situations?",
        "What role do integers play in everyday math problems?"
    ]
}

assessments = {
    "Proportional Relationships and Percentages": [
        "Quiz on calculating percentages and scale factors",
        "Solve word problems involving proportional relationships"
    ],
    "Solving Multi-Step Equations and Inequalities": [
        "Quiz on solving multi-step equations and graphing inequalities",
        "Write and solve real-world problems with inequalities"
    ],
    "Geometry: Circles and Area": [
        "Quiz on calculating circumference and area of circles",
        "Identify parts of circles and solve geometry problems"
    ],
    "Statistics: Probability and Sampling": [
        "Calculate probabilities in a quiz format",
        "Interpret data from random samples and make predictions"
    ],
    "Rational Numbers and Integer Operations": [
        "Quiz on operations with rational numbers",
        "Solve real-life problems using integers and absolute value"
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
topics = ["Proportional Relationships and Percentages", "Solving Multi-Step Equations and Inequalities", "Geometry: Circles and Area", "Statistics: Probability and Sampling", "Rational Numbers and Integer Operations"]
unique_lesson_plans = set()

# Set the number of variations per topic
num_variations = 3
json_data = []

# Generate structured message data for each topic with multiple variations
for topic in topics:
    count = 0
    while count < num_variations:
        prompt = f"Generate a lesson plan for Grade 7, Math, {topic}"
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
