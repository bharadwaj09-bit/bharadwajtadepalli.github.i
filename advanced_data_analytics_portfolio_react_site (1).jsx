import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, BarChart3, Database, Cpu, LineChart } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      {/* Hero */}
      <section className="px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
          <h1 className="text-5xl font-bold mb-6">Bharadwaj Tadepalli</h1>
          <p className="text-xl text-slate-300 mb-6">Senior Business & Data Analyst | Analytics Engineer</p>
          <p className="text-slate-400 leading-relaxed mb-8">I build analytics platforms, dashboards, and machine learning solutions that turn complex data into business decisions across finance and healthcare.</p>
          <div className="flex gap-4">
            <Button asChild><a href="#projects">View Projects</a></Button>
            <Button asChild variant="outline"><a href="/resume.pdf">Download Resume</a></Button>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/bharadwaj09-bit" target="_blank" rel="noreferrer"><Github /></a>
            <a href="https://www.linkedin.com/in/bharadwaj-tadepalli-74986524b/" target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href="mailto:tadepalli.bharadwaj@gmail.com"><Mail /></a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.8}}>
          <LineChart className="w-64 h-64 mx-auto text-indigo-400" />
        </motion.div>
      </section>

      {/* Skills */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills & Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card><CardContent className="p-6"><Database className="mb-4"/>SQL • Snowflake • BigQuery • AWS</CardContent></Card>
          <Card><CardContent className="p-6"><Cpu className="mb-4"/>Python • ML • Forecasting • Segmentation</CardContent></Card>
          <Card><CardContent className="p-6"><BarChart3 className="mb-4"/>Power BI • Tableau • Looker</CardContent></Card>
          <Card><CardContent className="p-6">Agile • Jira • APIs • Automation</CardContent></Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Credit Card Financial Intelligence Platform</h3>
              <p className="text-slate-400 mb-4">End-to-end analytics pipeline using SQL + Power BI + AWS delivering real-time revenue & risk insights.</p>
              <Button size="sm" asChild><a href="#case-credit">View Case Study</a></Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">AI Movie Recommendation Engine</h3>
              <p className="text-slate-400 mb-4">Machine learning recommender with TF-IDF, cosine similarity & SHAP explainability.</p>
              <Button size="sm" asChild><a href="#case-movie">View Case Study</a></Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-credit" className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Case Study: Credit Card Financial Dashboard</h2>
        <p className="text-slate-400 mb-4">Built at MetLife to unify CRM, claims, and finance data into a single Power BI platform.</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li><b>Problem:</b> Leadership lacked a real-time view of revenue, delinquency, and customer segments.</li>
          <li><b>Solution:</b> Designed SQL data models, automated ETL, and built Power BI dashboards with DAX metrics.</li>
          <li><b>Impact:</b> Reduced manual reporting by 40%, improved accuracy by 18%, enabled 6% cost reduction.</li>
          <li><b>Tech:</b> SQL, Power BI, Excel, AWS Athena, S3</li>
        </ul>
      </section>

      <section id="case-movie" className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Case Study: Movie Recommendation System</h2>
        <p className="text-slate-400 mb-4">Academic ML project using 45K+ movies to deliver explainable recommendations.</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li><b>Problem:</b> Users struggled to discover relevant movies from a massive catalog.</li>
          <li><b>Solution:</b> Built TF-IDF vectorization + cosine similarity model with SHAP explainability.</li>
          <li><b>Impact:</b> Delivered accurate, transparent recommendations for personalized discovery.</li>
          <li><b>Tech:</b> Python, scikit-learn, Pandas, SHAP, Matplotlib</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        <div className="space-y-6">
          <Card><CardContent className="p-6">Senior Business Analyst – Verinova Solutions (2025–Present)</CardContent></Card>
          <Card><CardContent className="p-6">Business Data Analyst Intern – MetLife (2023–2024)</CardContent></Card>
          <Card><CardContent className="p-6">Business Analyst – TCS (2020–2022)</CardContent></Card>
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Build Something Impactful</h2>
        <p className="text-slate-400 mb-6">Open to Analytics Engineer, Data Analyst, Business Intelligence roles</p>
        <Button asChild><a href="mailto:tadepalli.bharadwaj@gmail.com">Contact Me</a></Button>
      </section>
    </div>
  );
}
      <section className="px-8 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
          <h1 className="text-5xl font-bold mb-6">Bharadwaj Tadepalli</h1>
          <p className="text-xl text-slate-300 mb-6">Senior Business & Data Analyst | Analytics Engineer</p>
          <p className="text-slate-400 leading-relaxed mb-8">I build analytics platforms, dashboards, and machine learning solutions that turn complex data into business decisions across finance and healthcare.</p>
          <div className="flex gap-4">
            <Button asChild><a href="#projects">View Projects</a></Button>
            <Button asChild variant="outline"><a href="/resume.pdf">Download Resume</a></Button>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/bharadwaj09-bit" target="_blank" rel="noreferrer"><Github /></a>
            <a href="https://www.linkedin.com/in/bharadwaj-tadepalli-74986524b/" target="_blank" rel="noreferrer"><Linkedin /></a>
            <a href="mailto:tadepalli.bharadwaj@gmail.com"><Mail /></a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.8}}>
          <LineChart className="w-64 h-64 mx-auto text-indigo-400" />
        </motion.div>
      </section>

      {/* Skills */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Skills & Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card><CardContent className="p-6"><Database className="mb-4"/>SQL • Snowflake • BigQuery • AWS</CardContent></Card>
          <Card><CardContent className="p-6"><Cpu className="mb-4"/>Python • ML • Forecasting • Segmentation</CardContent></Card>
          <Card><CardContent className="p-6"><BarChart3 className="mb-4"/>Power BI • Tableau • Looker</CardContent></Card>
          <Card><CardContent className="p-6">Agile • Jira • APIs • Automation</CardContent></Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Credit Card Financial Intelligence Platform</h3>
              <p className="text-slate-400 mb-4">End‑to‑end analytics pipeline using SQL + Power BI + AWS delivering real‑time revenue & risk insights.</p>
              <Button size="sm">View Case Study</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">AI Movie Recommendation Engine</h3>
              <p className="text-slate-400 mb-4">Machine learning recommender with TF‑IDF, cosine similarity & SHAP explainability.</p>
              <Button size="sm">View Case Study</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        <div className="space-y-6">
          <Card><CardContent className="p-6">Senior Business Analyst – Verinova Solutions (2025‑Present)</CardContent></Card>
          <Card><CardContent className="p-6">Business Data Analyst Intern – MetLife (2023‑2024)</CardContent></Card>
          <Card><CardContent className="p-6">Business Analyst – TCS (2020‑2022)</CardContent></Card>
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Build Something Impactful</h2>
        <p className="text-slate-400 mb-6">Open to Analytics Engineer, Data Analyst, Business Intelligence roles</p>
        <Button>Contact Me</Button>
      </section>
    </div>
  );
}

