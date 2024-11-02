import random
import json

# Define Grade 6-specific data for each part of the lesson plan
quick_practice_examples = {
    "Ratios and Proportional Relationships": [
        "Find equivalent ratios (e.g., 3:4 and 6:8)",
        "Solve problems involving unit rates (e.g., miles per hour)",
        "Use ratio tables to solve real-life problems"
    ],
    "Introduction to Algebra": [
        "Translate verbal expressions into algebraic expressions",
        "Solve one-step equations (e.g., x + 5 = 12)",
        "Identify variables, constants, and coefficients in expressions"
    ],
    "Geometry: Area, Surface Area, and Volume": [
        "Calculate the area of triangles and parallelograms",
        "Find the surface area of rectangular prisms",
        "Calculate the volume of cubes and rectangular prisms"
    ],
    "Statistics and Probability": [
        "Find the mean, median, mode, and range of data sets",
        "Interpret data from bar graphs and histograms",
        "Calculate simple probabilities for single events"
    ],
    "The Number System": [
        "Add and subtract fractions with unlike denominators",
        "Multiply and divide multi-digit decimals",
        "Understand and use negative numbers in real-world contexts"
    ]
}

activities = {
    "Ratios and Proportional Relationships": [
        "Use ratio tables to solve real-life problems",
        "Group activity: Create equivalent ratios and solve word problems",
        "Solve unit rate problems with a partner"
    ],
    "Introduction to Algebra": [
        "Translate and evaluate algebraic expressions",
        "Solve one-step equations with hands-on activities",
        "Use algebra tiles to model expressions and equations"
    ],
    "Geometry: Area, Surface Area, and Volume": [
        "Use grid paper to calculate the area of different shapes",
        "Construct 3D models to understand surface area and volume",
        "Measure objects in the classroom to find area and volume"
    ],
    "Statistics and Probability": [
        "Conduct a survey and create bar graphs of the results",
        "Calculate mean, median, mode, and range of collected data",
        "Use dice or cards to explore simple probability events"
    ],
    "The Number System": [
        "Practice adding and subtracting fractions using visual aids",
        "Solve multi-step problems with decimals",
        "Use a number line to understand positive and negative numbers"
    ]
}

essential_questions = {
    "Ratios and Proportional Relationships": [
        "How do ratios help us compare quantities?",
        "Why is understanding rates and proportional relationships important?"
    ],
    "Introduction to Algebra": [
        "How can algebra be used to describe patterns?",
        "What do variables and equations represent in real-world situations?"
    ],
    "Geometry: Area, Surface Area, and Volume": [
        "How do we measure and compare shapes in two and three dimensions?",
        "Why is surface area important in real-life applications?"
    ],
    "Statistics and Probability": [
        "How do we analyze data to make informed decisions?",
        "What role does probability play in everyday life?"
    ],
    "The Number System": [
        "How do we work with positive and negative numbers in real-life situations?",
        "Why are fractions and decimals important in problem-solving?"
    ]
}

assessments = {
    "Ratios and Proportional Relationships": [
        "Quiz on identifying and solving ratio problems",
        "Solve real-world problems involving rates and proportional relationships"
    ],
    "Introduction to Algebra": [
        "Solve one-step equations in a quiz",
        "Translate real-world situations into algebraic expressions"
    ],
    "Geometry: Area, Surface Area, and Volume": [
        "Calculate area and volume in a quiz",
        "Quiz on finding surface area of 3D shapes"
    ],
    "Statistics and Probability": [
        "Analyze data sets and find mean, median, mode, and range",
        "Calculate probabilities of single events using dice or cards"
    ],
    "The Number System": [
        "Quiz on adding, subtracting, multiplying, and dividing decimals",
        "Solve problems with fractions and negative numbers"
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
topics = ["Ratios and Proportional Relationships", "Introduction to Algebra", "Geometry: Area, Surface Area, and Volume", "Statistics and Probability", "The Number System"]
unique_lesson_plans = set()

# Set the number of variations per topic
num_variations = 3
json_data = []

# Generate structured message data for each topic with multiple variations
for topic in topics:
    count = 0
    while count < num_variations:
        prompt = f"Generate a lesson plan for Grade 6, Math, {topic}"
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
