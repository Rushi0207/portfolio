import { NextRequest, NextResponse } from 'next/server';

// In a real application, you'd use a database
// For now, we'll use a simple file-based counter
let downloadCount = 0;

export async function POST(request: NextRequest) {
  try {
    // Increment the download counter
    downloadCount++;
    
    // In a production app, you'd save this to a database
    // For now, we'll just return the count
    
    return NextResponse.json({ 
      success: true, 
      downloadCount: downloadCount,
      message: 'Download tracked successfully' 
    });
  } catch (error) {
    console.error('Error tracking download:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to track download' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      downloadCount: downloadCount 
    });
  } catch (error) {
    console.error('Error getting download count:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get download count' },
      { status: 500 }
    );
  }
}