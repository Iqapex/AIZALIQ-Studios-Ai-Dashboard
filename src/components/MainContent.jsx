// src/components/MainContent.js
import React from 'react';
import './styles/main.css';

function MainContent() {
    return (
        <main className="main-content">
            <h2>Interview Groups</h2>

            <div className="group">
                <h3 className="section-title">Interview</h3>
                <div className="group-items">
                    <div className="group-item">Domain Specific Interview</div>
                    <div className="group-item">Competency Based Interview</div>
                    <div className="group-item">HR Interview</div>
                </div>
            </div>

            <div className="group">
                <h3 className="section-title">Popular AI Solutions</h3>
                <div className="group-items">
                    <div className="group-item">Ask Anything</div>
                    <div className="group-item">Generate Images</div>
                    <div className="group-item">Generate Videos</div>
                    <div className="group-item">Life Coach</div>
                    <div className="group-item">Medical Guide</div>
                    <div className="group-item">Psychologist</div>
                    <div className="group-item">Office Assistant</div>
                    <div className="group-item">Language Expert</div>
                    <div className="group-item">Science Tutor</div>
                    <div className="group-item">Career Counselor</div>
                    <div className="group-item">IQ Assessor</div>
                    <div className="group-item">Social Media Expert</div>
                </div>
                <div className="explore-button-container">
                    <button className="explore-button">Explore</button>
                </div>
            </div>

            {/* New Section with Two Cards */}
            <div className="cards-container">
                {/* Card 1 */}
                <div className="card">
                    <h4>Subscription Plan: FREE</h4>
                    <p>Daily AI Credits: 20</p>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: "0%" }}></div>
                    </div>
                    <button className="card-btn">Increase your Daily AI Credit limit</button>
                </div>

                {/* Card 2 */}
                <div className="card green">
                    <h4>Your Current Point 131</h4>
                    <p>
                        Get your friends to sign up with your Referral Code and earn Reward Points.
                        Use your points while buying Subscriptions.
                    </p>
                    <button className="card-btn">Know more</button>
                </div>
            </div>

            {/* LLM Access Section */}
            <div className="llm-section">
                <h4>Get access to 100+ LLMs with higher AI Credit Limit.</h4>
                <div className="llm-icons">
                    <div className="llm-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58UpQdoq4AcJGMdJYoIJ8qHApwhXHDj7auQ&s" alt="ChatGPT" />
                        <span>ChatGPT</span>
                    </div>
                    <div className="llm-item">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg" alt="Claude" />
                        <span>Claude</span>
                    </div>
                    <div className="llm-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s" alt="Gemini" />
                        <span>Gemini</span>
                    </div>
                    <div className="llm-item">
                        <img src="https://toffeedev.com/wp-content/uploads/2025/03/deepseek-1.webp" alt="DeepSeek" />
                        <span>DeepSeek</span>
                    </div>
                    <div className="llm-item">
                        <img src="https://heute-at-prod-images.imgix.net/2025/01/28/ecafc8cd-84cf-4fac-a8f6-d980cffe040d.jpeg?rect=0%2C200%2C3000%2C1687&auto=format" alt="Perplexity" />
                        <span>Perplexity</span>
                    </div>
                    <div className="llm-item">
                        <img src="https://closebot.com/wp-content/uploads/2025/06/grok_240x240_white.png" alt="Grok" />
                        <span>Grok</span>
                    </div>
                </div>

                <button className="subscribe-btn">
                    🛒 Plan starts @ ₹49 monthly! Subscribe Now
                </button>
            </div>




            {/* Blog/Articles Section */}

            <div className="blog-section">
                <div className="blog-card">
                    <img
                        src="https://ns-hrms-s3-bucket.s3.amazonaws.com/media/marketing_website/thumbnail/250728142653_Banner-resize_From-automation-to-innovation_-How-AI-business-solutions-are-reshaping-industries_1200x600.jpg"
                        alt="Food Packaging"
                    />
                    <div className="blog-content">
                        <h5>Simplifying Food Packaging Compliance: AI’s Role</h5>
                    </div>
                </div>

                <div className="blog-card">
                    <img
                        src="https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/644975a9-d989-49bf-89e5-b57fe2c8a520.png"
                        alt="AI Ombudsman"
                    />
                    <div className="blog-content">
                        <h5>Fairness at Your Fingertips: Exploring the AI Ombudsman</h5>
                    </div>
                </div>

                <div className="blog-card">
                    <img
                        src="https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/05/Repository.webp?lossy=1&quality=75&webp=92&ssl=1"
                        alt="Translation Tool"
                    />
                    <div className="blog-content">
                        <h5>Breaking Language Barriers: The Revolutionary Translation Tool</h5>
                    </div>
                </div>
            </div>



        </main>
    );
}

export default MainContent;
