import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing SUPABASE credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDb() {
  const { data, error } = await supabase.from('site_content').select('*').eq('id', 1).single();
  if (error) {
    console.error("Fetch DB error:", error);
    return;
  }
  
  if (!data || !data.content) {
    console.log("No content found");
    return;
  }
  
  const c = data.content.home;
  if (!c) {
    console.log("No home content found");
    return;
  }

  // Check array types
  console.log("hero.rightCard.stats isArray?", Array.isArray(c.hero?.rightCard?.stats), "Type:", typeof c.hero?.rightCard?.stats);
  console.log("whyChoose.problems isArray?", Array.isArray(c.whyChoose?.problems), "Type:", typeof c.whyChoose?.problems);
  console.log("services.items isArray?", Array.isArray(c.services?.items), "Type:", typeof c.services?.items);
  console.log("team.members isArray?", Array.isArray(c.team?.members), "Type:", typeof c.team?.members);
  console.log("process.steps isArray?", Array.isArray(c.process?.steps), "Type:", typeof c.process?.steps);
  console.log("faq.items isArray?", Array.isArray(c.faq?.items), "Type:", typeof c.faq?.items);
  console.log("testimonials.items isArray?", Array.isArray(c.testimonials?.items), "Type:", typeof c.testimonials?.items);
  console.log("targetAudience.industries isArray?", Array.isArray(c.targetAudience?.industries), "Type:", typeof c.targetAudience?.industries);
  console.log("realImpact.stats isArray?", Array.isArray(c.realImpact?.stats), "Type:", typeof c.realImpact?.stats);

  // Check sub-arrays
  if (Array.isArray(c.whyChoose?.problems)) {
     console.log("whyChoose.problems[0].solution.features isArray?", Array.isArray(c.whyChoose.problems[0]?.solution?.features));
  }
  
  if (c.realImpact?.caseStudy1?.results?.metrics) {
      console.log("realImpact.caseStudy1.results.metrics isArray?", Array.isArray(c.realImpact.caseStudy1.results.metrics));
  }
}

checkDb();
