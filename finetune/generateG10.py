import random
import json

# Define Grade 10-specific data for each part of the lesson plan
quick_practice_examples = {
    "Quadratic Functions and Complex Numbers": [
        "Graph quadratic functions and analyze parabolas",
        "Solve quadratic equations with complex solutions",
        "Identify key features of quadratic functions (vertex, axis of symmetry)"
    ],
    "Polynomials and Polynomial Functions": [
        "Add, subtract, and multiply polynomial expressions",
        "Factor polynomials and solve polynomial equations",
        "Analyze polynomial graphs and identify roots"
    ],
    "Trigonometry: Sine, Cosine, and Tangent Ratios": [
        "Use the sine, cosine, and tangent ratios to solve right triangles",
        "Apply trigonometric ratios to solve real-world problems",
        "Understand and use the unit circle for trigonometric values"
    ],
    "Geometry: Circles and Conic Sections": [
        "Analyze the equations of circles and ellipses",
        "Graph parabolas, circles, and ellipses on the coordinate plane",
        "Solve problems involving the properties of circles and conic sections"
    ],
    "Probability and Combinatorics": [
        "Calculate probabilities of dependent and independent events",
        "Use combinations and permutations to solve counting problems",
        "Apply probability to real-world situations and interpret results"
    ]
}

activities = {
    "Quadratic Functions and Complex Numbers": [
        "Graph quadratic functions and identify their key features",
        "Solve real-world problems involving quadratic functions",
        "Use the quadratic formula to solve equations with complex solutions"
    ],
    "Polynomials and Polynomial Functions": [
        "Add, subtract, and multiply polynomials in pairs",
        "Solve polynomial equations by factoring",
        "Explore polynomial graphs and identify end behavior"
    ],
    "Trigonometry: Sine, Cosine, and Tangent Ratios": [
        "Practice solving right triangles using trigonometric ratios",
        "Apply the unit circle to find values of sine, cosine, and tangent",
        "Group activity: Solve real-life problems involving trigonometry"
    ],
    "Geometry: Circles and Conic Sections": [
        "Graph and analyze equations of circles and ellipses",
        "Explore conic sections with hands-on activities",
        "Solve problems involving the properties of circles"
    ],
    "Probability and Combinatorics": [
        "Calculate probabilities for compound events",
        "Use combinations and permutations to count outcomes",
        "Conduct experiments to apply probability to real-world situations"
    ]
}

essential_questions = {
    "Quadratic Functions and Complex Numbers": [
        "How are quadratic functions used to model real-world situations?",
        "What is the significance of complex solutions in quadratic equations?"
    ],
    "Polynomials and Polynomial Functions": [
        "How do polynomials help us understand relationships in math?",
        "Why is factoring important in solving polynomial equations?"
    ],
    "Trigonometry: Sine, Cosine, and Tangent Ratios": [
        "How do trigonometric ratios apply to real-world problems?",
        "What is the unit circle, and why is it important in trigonometry?"
    ],
    "Geometry: Circles and Conic Sections": [
        "How do conic sections model real-world phenomena?",
        "What properties of circles and ellipses are important in geometry?"
    ],
    "Probability and Combinatorics": [
        "How can probability and combinatorics help us make decisions?",
        "What is the difference between dependent and independent events?"
    ]
}

assessments = {
    "Quadratic Functions and Complex Numbers": [
        "Quiz on graphing and solving quadratic functions",
        "Solve real-life problems involving quadratic equations"
    ],
    "Polynomials and Polynomial Functions": [
        "Quiz on polynomial operations and factoring",
        "Solve equations involving polynomials in a real-world context"
    ],
    "Trigonometry: Sine, Cosine, and Tangent Ratios": [
        "Quiz on trigonometric ratios and solving triangles",
        "Solve word problems involving trigonometric applications"
    ],
    "Geometry: Circles and Conic Sections": [
        "Quiz on the properties of circles and conic sections",
        "Analyze and graph equations of circles and ellipses"
    ],
    "Probability and Combinatorics": [
        "Calculate probabilities and interpret combinatorial results",
        "Quiz on permutations, combinations, and probability concepts"
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
topics = ["Quadratic Functions and Complex Numbers", "Polynomials and Polynomial Functions", "Trigonometry: Sine, Cosine, and Tangent Ratios", "Geometry: Circles and Conic Sections", "Probability and Combinatorics"]
unique_lesson_plans = set()

# Set the number of variations per topic
num_variations = 3
json_data = []

# Generate structured message data for each topic with multiple variations
for topic in topics:
    count = 0
    while count < num_variations:
        prompt = f"Generate a lesson plan for Grade 10, Math, {topic}"
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
