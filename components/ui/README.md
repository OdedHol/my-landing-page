# Syd&Eats UI Component Library

Custom-built component library for the Syd&Eats landing page. All components are built from scratch with no external UI libraries, designed to match the premium, sophisticated tone of a food concierge service.

## Design System

### Color Palette
- **Primary**: Deep black (#1a1a1a) - Elegance and sophistication
- **Secondary**: Warm gold (#c89968) - Premium feel
- **Accent**: Rich brown (#8b4513) - Earthy, food-focused
- **Background**: Warm off-white (#fdfbf7) - Soft, inviting

### Typography
- **Headings**: Playfair Display (serif) - Classical elegance
- **Body**: System font stack - Modern readability

## Components

### Button
Versatile button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'small' | 'medium' | 'large'
- `fullWidth`: boolean
- All standard button HTML attributes

**Usage:**
```tsx
<Button variant="primary" size="large">Get Started</Button>
<Button variant="outline">Learn More</Button>
```

### Card
Flexible card component with header, body, and footer sections.

**Props:**
- `variant`: 'default' | 'elevated' | 'bordered' | 'feature'
- `hoverable`: boolean - Adds hover animation
- `onClick`: function - Makes card clickable

**Usage:**
```tsx
<Card variant="elevated" hoverable>
  <CardHeader
    icon="🍽️"
    title="Title"
    subtitle="Subtitle"
  />
  <CardBody>
    <Text>Content goes here</Text>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### List
List component with three variants for different use cases.

**Props:**
- `variant`: 'default' | 'feature' | 'checklist'

**Usage:**
```tsx
<List variant="feature">
  <ListItem
    icon="📱"
    title="Title"
    description="Description"
  />
</List>

<List variant="checklist">
  <ListItem title="Checklist item" />
</List>
```

### Input, TextArea, Select
Form components with labels, error states, and helper text.

**Props:**
- `label`: string
- `error`: string - Shows error message
- `helperText`: string - Shows helper text
- `fullWidth`: boolean
- `required`: boolean - Shows asterisk

**Usage:**
```tsx
<Input
  label="Name"
  placeholder="Your name"
  required
  fullWidth
/>

<TextArea
  label="Message"
  rows={4}
  helperText="Optional helper text"
/>

<Select
  label="Choose"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
/>
```

### Container, Section, Grid
Layout components for consistent spacing and structure.

**Usage:**
```tsx
<Section background="surface" padding="large">
  <Container size="medium">
    <Grid columns={3} gap="large">
      {/* Content */}
    </Grid>
  </Container>
</Section>
```

### Typography
Text components with semantic meaning and styling.

**Components:**
- `Display` - Hero/large headings with optional gradient
- `Heading` - Standard headings (h1-h6)
- `Text` - Body text with variants
- `Badge` - Small labels/tags

**Usage:**
```tsx
<Display size="large" gradient>Syd&Eats</Display>
<Heading level={2}>Section Title</Heading>
<Text variant="lead" color="secondary">
  Lead paragraph text
</Text>
<Badge variant="secondary">New</Badge>
```

## Design Principles

1. **No External Dependencies**: All components built from scratch
2. **Accessibility**: Proper focus states, ARIA labels, semantic HTML
3. **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px
4. **Performance**: CSS Modules for scoped, optimized styles
5. **Consistency**: Shared design tokens via CSS variables
6. **Premium Feel**: Subtle animations, shadows, and color palette

## SEO & AEO Optimization

The component library is built with SEO and Answer Engine Optimization in mind:
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive meta tags in layout
- Accessible forms with labels
- Schema-ready markup structure
