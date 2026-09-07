'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  FileCheck2,
  RotateCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Checkbox } from '@/components/ui/checkbox';
import { services, locations, industries } from '@/lib/content';

const initial = {
  name: '',
  business: '',
  email: '',
  website: '',
  location: '',
  industry: '',
  goal: '',
  budget: 'Not sure yet',
};
export function ContactForm({
  initialService = '',
  initialLocation = '',
  initialIndustry = '',
}: {
  initialService?: string;
  initialLocation?: string;
  initialIndustry?: string;
}) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    ...initial,
    location: locations.some((l) => l.slug === initialLocation)
      ? initialLocation
      : '',
    industry:
      initialIndustry === 'healthcare' ||
      industries.some((i) => i.slug === initialIndustry)
        ? initialIndustry
        : '',
  });
  const [selected, setSelected] = useState<string[]>(
    services.some((s) => s.slug === initialService) ? [initialService] : [],
  );
  const [downloaded, setDownloaded] = useState(false);
  const [error, setError] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const update = (key: keyof typeof initial, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));
  const go = (n: number) => {
    setStep(n);
    setError('');
    setTimeout(() => heading.current?.focus(), 0);
  };
  const chosen = services.filter((s) => selected.includes(s.slug));
  const brief = () =>
    `TIMEMAC DIGITAL — GROWTH CONVERSATION BRIEF\n\nPrepared by you. This brief has not been sent.\n\nYOUR BUSINESS\nName: ${data.name}\nBusiness: ${data.business}\nEmail: ${data.email}\nWebsite: ${data.website || 'Not provided'}\nLocation: ${locations.find((l) => l.slug === data.location)?.name || data.location}\nIndustry: ${industries.find((i) => i.slug === data.industry)?.name || data.industry}\n\nYOUR NEXT CHAPTER\nServices: ${chosen.map((s) => s.title).join(', ') || 'Help me choose'}\nMonthly marketing budget: ${data.budget}\nGoal: ${data.goal}\n\nA USEFUL STARTING POINT\n1. Review your current discovery, website and enquiry journey.\n2. ${chosen.length ? 'Explore ' + chosen.map((s) => s.title).join(' + ') + '.' : 'Choose the first channel around your audience and current setup.'}\n3. Agree on scope, responsibilities and useful measures of progress.\n\nNo booking has been made. Share this brief directly when Timemac Digital contact details are available.\n`;
  function download() {
    const blob = new Blob([brief()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'timemac-growth-brief.txt';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }
  if (step === 3)
    return (
      <div className="contact-form brief-ready">
        <div className="success-icon">
          <FileCheck2 size={29} />
        </div>
        <span className="eyebrow">A CLEARER STARTING POINT</span>
        <h2 ref={heading} tabIndex={-1}>
          Your next chapter,
          <br />
          in one place.
        </h2>
        <p>
          Your brief for <strong>{data.business}</strong> is ready to download.
          Nothing has been sent and no appointment has been booked.
        </p>
        <div className="brief-summary">
          <div>
            <span>YOUR FOCUS</span>
            <strong>
              {chosen.length
                ? chosen.map((s) => s.short).join(' + ')
                : 'Find the right starting point'}
            </strong>
          </div>
          <div>
            <span>YOUR GOAL</span>
            <p>{data.goal}</p>
          </div>
          <div>
            <span>A USEFUL FIRST STEP</span>
            <p>
              Review how people discover your business, what they see on your
              website and what happens after they enquire.
            </p>
          </div>
        </div>
        <Button
          className="button button-dark download-button"
          onClick={download}
        >
          <Download size={17} />
          {downloaded ? 'Download brief again' : 'Download your growth brief'}
        </Button>
        <output className="download-feedback">
          {downloaded
            ? 'Download requested. Your brief is saved as a text file by your browser.'
            : 'The brief is created in your browser and includes the details you entered.'}
        </output>
        <div className="brief-actions">
          <Button variant="ghost" onClick={() => go(2)}>
            <ArrowLeft size={15} />
            Edit your brief
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              setData(initial);
              setSelected([]);
              setDownloaded(false);
              go(1);
            }}
          >
            <RotateCcw size={15} />
            Start fresh
          </Button>
        </div>
      </div>
    );
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (step === 1) {
          go(2);
        } else if (data.goal.trim().length < 10) {
          setError(
            'Tell us a little more about your goal (at least 10 characters).',
          );
        } else {
          go(3);
        }
      }}
    >
      <div className="form-progress">
        <span className={step >= 1 ? 'active' : ''}>
          <i>{step > 1 ? <Check size={12} /> : '01'}</i>Your business
        </span>
        <span className="progress-line" />
        <span className={step >= 2 ? 'active' : ''}>
          <i>02</i>Your next chapter
        </span>
      </div>
      <h2 ref={heading} tabIndex={-1}>
        {step === 1
          ? 'First, a little about you.'
          : 'What would you like to grow?'}
      </h2>
      <p className="form-intro">
        {step === 1
          ? 'A few details to give the conversation a good starting point.'
          : 'Choose what is on your mind. We’ll bring it together into a brief.'}
      </p>
      {step === 1 ? (
        <div className="form-fields">
          <div className="field-row">
            <label htmlFor="name">
              Your name <span>*</span>
              <Input
                autoComplete="name"
                id="name"
                name="name"
                required
                maxLength={120}
                value={data.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="What should we call you?"
              />
            </label>
            <label htmlFor="business">
              Business name <span>*</span>
              <Input
                autoComplete="organization"
                id="business"
                name="business"
                required
                maxLength={160}
                value={data.business}
                onChange={(e) => update('business', e.target.value)}
                placeholder="Your business or practice"
              />
            </label>
          </div>
          <label htmlFor="email">
            Email address <span>*</span>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              maxLength={200}
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@yourbusiness.com"
            />
          </label>
          <label htmlFor="website">
            Website <span className="optional">(optional)</span>
            <Input
              type="url"
              id="website"
              name="website"
              autoComplete="url"
              maxLength={500}
              value={data.website}
              onChange={(e) => update('website', e.target.value)}
              placeholder="https://yourbusiness.com"
            />
          </label>
          <div className="field-row">
            <label htmlFor="location">
              Your location <span>*</span>
              <NativeSelect
                id="location"
                name="location"
                required
                value={data.location}
                onChange={(e) => update('location', e.target.value)}
              >
                <NativeSelectOption value="" disabled>
                  Select location
                </NativeSelectOption>
                {locations.map((l) => (
                  <NativeSelectOption key={l.slug} value={l.slug}>
                    {l.name}
                  </NativeSelectOption>
                ))}
                <NativeSelectOption value="Across the region">
                  Across the region
                </NativeSelectOption>
                <NativeSelectOption value="Elsewhere">
                  Elsewhere
                </NativeSelectOption>
              </NativeSelect>
            </label>
            <label htmlFor="industry">
              Your industry <span>*</span>
              <NativeSelect
                id="industry"
                name="industry"
                required
                value={data.industry}
                onChange={(e) => update('industry', e.target.value)}
              >
                <NativeSelectOption value="" disabled>
                  Select industry
                </NativeSelectOption>
                <NativeSelectOption value="healthcare">
                  Healthcare
                </NativeSelectOption>
                {industries
                  .filter((i) => i.label !== 'HEALTHCARE')
                  .map((i) => (
                    <NativeSelectOption key={i.slug} value={i.slug}>
                      {i.name}
                    </NativeSelectOption>
                  ))}
                <NativeSelectOption value="Other">Other</NativeSelectOption>
                {industries
                  .filter((i) => i.label === 'HEALTHCARE')
                  .map((i) => (
                    <NativeSelectOption key={i.slug} value={i.slug}>
                      {i.name}
                    </NativeSelectOption>
                  ))}
              </NativeSelect>
            </label>
          </div>
        </div>
      ) : (
        <div className="form-fields">
          <fieldset>
            <legend>
              What can we help with?{' '}
              <span className="optional">(choose any)</span>
            </legend>
            <div className="service-choices">
              {services.map((s) => (
                <label
                  key={s.slug}
                  className={selected.includes(s.slug) ? 'selected' : ''}
                >
                  <Checkbox
                    id={'service-' + s.slug}
                    checked={selected.includes(s.slug)}
                    onCheckedChange={(checked) =>
                      setSelected((prev) =>
                        checked
                          ? [...prev, s.slug]
                          : prev.filter((x) => x !== s.slug),
                      )
                    }
                  />
                  {s.short}
                </label>
              ))}
            </div>
            <p className="field-help">
              Not sure? Leave these blank and start with your goal.
            </p>
          </fieldset>
          <label htmlFor="goal">
            What would you like to achieve? <span>*</span>
            <Textarea
              id="goal"
              name="goal"
              rows={4}
              minLength={10}
              maxLength={2000}
              required
              aria-invalid={!!error}
              aria-describedby={error ? 'goal-error' : undefined}
              value={data.goal}
              onChange={(e) => {
                update('goal', e.target.value);
                setError('');
              }}
              placeholder="For example: help more people find our clinic in Udupi and improve how we follow up on appointment enquiries."
            />
          </label>
          {error && (
            <p className="form-error" id="goal-error" role="alert">
              {error}
            </p>
          )}
          <label htmlFor="budget">
            Monthly marketing budget{' '}
            <span className="optional">(optional)</span>
            <NativeSelect
              id="budget"
              name="budget"
              value={data.budget}
              onChange={(e) => update('budget', e.target.value)}
            >
              {[
                'Not sure yet',
                'Under ₹25,000',
                '₹25,000–₹50,000',
                '₹50,000–₹1,00,000',
                'Above ₹1,00,000',
              ].map((b) => (
                <NativeSelectOption value={b} key={b}>
                  {b}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </label>
          <p className="field-help">
            This is your planning budget, not a quote or a pricing commitment.
          </p>
        </div>
      )}
      <div className="form-navigation">
        {step === 2 && (
          <Button type="button" variant="ghost" onClick={() => go(1)}>
            <ArrowLeft size={16} />
            Back
          </Button>
        )}
        <Button type="submit" className="button button-dark">
          {step === 1 ? 'Next: your goals' : 'Prepare my brief'}
          <ArrowRight size={17} />
        </Button>
      </div>
      <p className="form-privacy">
        Your details stay in this page until you download your brief. The form
        does not send enquiries yet. Please don’t include patient or medical
        information. <Link href="/privacy">Privacy details</Link>.
      </p>
    </form>
  );
}
